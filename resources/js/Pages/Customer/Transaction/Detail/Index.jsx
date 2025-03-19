import CustomerLayout from '@/Layouts/CustomerLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { Image, Card, Divider, Button, addToast, useDisclosure } from '@heroui/react';
import { BiCopy, BiInfoCircle, BiCheck } from 'react-icons/bi';
import { VscSync } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { formatRupiah } from '@/utils/format_rupiah';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useWebSocket from '@/Hooks/useWebSocket';
import CancelTransactionModal from '@/Components/Modal/CancelTransactionModal';

// Komponen Countdown terpisah
const Countdown = ({ expiryTime }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const expiryDate = new Date(expiryTime);
        const now = new Date();
        const difference = expiryDate - now;

        if (difference <= 0) {
            return {
                hours: 0,
                minutes: 0,
                seconds: 0,
                isExpired: true
            };
        }

        return {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            isExpired: false
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [expiryTime]);

    const formatNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    return (
        <div className={`font-mono ${timeLeft.isExpired ? 'text-red-500' : 'text-green-500'}`}>
            {timeLeft.isExpired ? (
                <span>Expired</span>
            ) : (
                <span>{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
            )}
        </div>
    );
};

// Komponen TransactionDetails
const TransactionDetails = ({ transaction, copyInvoiceNumber, copied }) => {
    const { transaction_detail, product_detail, product, image } = transaction;

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-col md:flex-row gap-4">
                <Image
                    src={route('stream', { path: image.path })}
                    alt={transaction_detail[0].name}
                    className="w-full h-48 sm:h-auto object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-lg mb-1">{transaction_detail[0].name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {product.description ? product.description.substring(0, 100) : 'Deskripsi produk'}...
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-default-100 p-2 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-100">Harga</p>
                        <p className="text-xl font-bold text-blue-600">{formatRupiah(transaction_detail[0].price)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Komponen QRCodeSection
const QRCodeSection = ({ qrCodeUrl, paymentMethod }) => {
    if (!qrCodeUrl) {
        return <p className="text-gray-500">QR Code tidak tersedia saat ini.</p>;
    }

    return (
        <>
            <Image
                src={qrCodeUrl}
                alt="QR Code Pembayaran"
                className="max-w-full h-64 object-contain mb-4"
            />
            <div className="bg-yellow-50 p-3 rounded-lg w-full">
                <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-2 text-black">
                        <BiInfoCircle className="text-yellow-500 mt-1" />
                        <p>Panduan Pembayaran</p>
                    </div>
                    <div
                        className="prose max-w-full"
                        dangerouslySetInnerHTML={{ __html: paymentMethod.description }}
                    />
                </div>
            </div>
        </>
    );
};

const PaymentActions = ({ transactionId, onStatusUpdate }) => {
    const queryClient = useQueryClient();

    // Mutation untuk cek status
    const checkStatusMutation = useMutation({
        mutationFn: async () => {
            const response = await axios.get(route('api.transactions.check-status', { id: transactionId }));
            return response.data;
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries(['transaction', transactionId]);

            if (response.status === 'success' && response.data) {
                onStatusUpdate(response.data.transaction_status);

                addToast({
                    title: "Berhasil",
                    description: response.message || "Status transaksi berhasil diperbarui",
                    color: "success",
                });
            }
        },
        onError: (error) => {
            addToast({
                title: "Hmm, sayang sekali:(",
                description: error.response?.data?.error || 'Gagal memeriksa status transaksi',
                color: "danger",
            });
        }
    });

    // Mutation untuk membatalkan transaksi
    const cancelTransactionMutation = useMutation({
        mutationFn: async () => {
            const response = await axios.post(route('api.transactions.cancel', { id: transactionId }));
            return response.data;
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries(['transaction', transactionId]);

            if (response.status === 'success' && response.data) {
                onStatusUpdate(response.data.transaction_status);

                addToast({
                    title: "Berhasil",
                    description: response.message || "Status transaksi berhasil dibatalkan",
                    color: "success",
                });
            }
        },
        onError: (error) => {
            addToast({
                title: "Hmm, sayang sekali:(",
                description: error.response?.data?.error || 'Gagal membatalkan transaksi',
                color: "danger",
            })
        }
    });

    const handleCheckStatus = () => {
        checkStatusMutation.mutate();
    };

    const handleCancelTransaction = () => {
        if (confirm('Apakah Anda yakin ingin membatalkan transaksi ini? Tindakan ini tidak dapat dibatalkan.')) {
            cancelTransactionMutation.mutate();
        }
    };

    return (
        <div className="flex gap-2">
            <Button
                color="primary"
                startContent={<VscSync className={checkStatusMutation.isPending ? "animate-spin" : ""} />}
                isLoading={checkStatusMutation.isPending}
                onPress={handleCheckStatus}
                isDisabled={checkStatusMutation.isPending || cancelTransactionMutation.isPending}
            >
                Cek Status
            </Button>
            <CancelTransactionModal transactionId={transactionId} onStatusUpdate={onStatusUpdate} checkStatusMutation={checkStatusMutation} />
        </div>
    );
};

// Komponen utama
const Index = ({ transaction }) => {
    const [copied, setCopied] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(transaction.status || "Menunggu Pembayaran");

    // Ekstrak dan siapkan data
    const { transaction_detail, transaction_log, payment_method } = transaction;
    const { product_detail } = transaction_detail[0];
    const { product } = product_detail;
    const { image } = product;

    // Parse data dari transaction log
    const response = transaction_log?.[0]?.response
        ? JSON.parse(transaction_log[0].response)
        : null;

    const qrCodeUrl = response?.actions?.[0]?.url || null;
    const payload = transaction_log?.[0]?.payload
        ? JSON.parse(transaction_log[0].payload)
        : null;

    // Handler untuk copy invoice number
    const copyInvoiceNumber = () => {
        navigator.clipboard.writeText(transaction.invoice_number);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Data yang dikumpulkan untuk digunakan dalam komponen
    const transactionData = {
        transaction_detail,
        product_detail,
        product,
        image
    };

    const handleStatusUpdate = (newStatus) => {
        setCurrentStatus(newStatus);
    };

    const { message } = useWebSocket(
        'payment-notification',
        'PaymentNotificationEvent',
    );

    useEffect(() => {
        if (message != '' && message != null) {
            let messageJson = JSON.parse(message)

            setCurrentStatus(messageJson.status)

            addToast({
                title: messageJson.status === 'success' ? 'Berhasil' : "Hmm, sayang sekali:(",
                description: messageJson.message,
                color: messageJson.status === 'success' ? 'success' : 'danger',
            })
        }
    }, [message])

    return (
        <CustomerLayout>
            <Head title="Detail Transaksi" />
            <div className="flex flex-col sm:flex-row justify-center py-8 px-4 md:px-0 gap-4">
                {/* Card Transaksi */}
                <Card className="w-full max-w-md shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-500 text-white p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Detail Transaksi</h2>
                        </div>
                    </div>

                    {/* Nomor Transaksi */}
                    <div className="p-4 bg-blue-50 dark:bg-default-100 text-gray-600 dark:text-white">
                        <p className="text-sm mb-1">Nomor Transaksi</p>
                        <div className="flex items-center justify-between">
                            <p className="font-mono font-bold">{transaction.invoice_number}</p>
                            <Button
                                isIconOnly
                                size="sm"
                                variant="light"
                                onPress={copyInvoiceNumber}
                                className="text-blue-500"
                            >
                                {copied ? <BiCheck size={20} /> : <BiCopy size={20} />}
                            </Button>
                        </div>
                        <div className="flex items-center mt-2 text-xs">
                            <BiInfoCircle className="mr-1" />
                            <p>Simpan nomor transaksi sebagai referensi</p>
                        </div>
                    </div>

                    <Divider className="my-0" />

                    {/* Detail Produk */}
                    <TransactionDetails
                        transaction={transactionData}
                        copyInvoiceNumber={copyInvoiceNumber}
                        copied={copied}
                    />

                    <Divider className="my-0" />

                    {/* Footer Tiket */}
                    <div className="flex flex-col p-4 gap-2">
                        {/* Info Pelanggan */}
                        <div className="flex flex-row gap-2 text-gray-500 font-bold">
                            <div className="flex flex-col">
                                {JSON.parse(product.input).map((item, i) => (
                                    <p key={i}>{`${item.label} : `}</p>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <p>{transaction.customer_number}</p>
                            </div>
                        </div>

                        {/* Expired Pembayaran */}
                        {
                            currentStatus === 'pending' && (
                                <div className="flex flex-row gap-2 items-center">
                                    <p>Expired Pembayaran</p>
                                    {response?.expiry_time && (
                                        <Countdown expiryTime={response.expiry_time} />
                                    )}
                                </div>
                            )
                        }

                        {/* Status Transaksi */}
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-100">Status Transaksi</p>
                                <p className={`font-medium ${currentStatus === 'success' ? 'text-green-600 dark:text-green-400' :
                                    currentStatus === 'failed' || currentStatus === 'cancel' ? 'text-red-600 dark:text-red-400' :
                                        'text-gray-800 dark:text-gray-100'
                                    }`}>
                                    {currentStatus === 'success' ? 'Berhasil' :
                                        currentStatus === 'pending' ? 'Menunggu Pembayaran' :
                                            currentStatus === 'failed' ? 'Gagal' :
                                                currentStatus === 'cancel' ? 'Dibatalkan' :
                                                    currentStatus || "Menunggu Pembayaran"}
                                </p>
                            </div>
                        </div>

                        {/* Tombol Aksi */}
                        {
                            currentStatus === 'pending' && (
                                <PaymentActions
                                    transactionId={transaction.id}
                                    onStatusUpdate={handleStatusUpdate}
                                />
                            )
                        }

                    </div>
                </Card>

                {/* QR Code dan Panduan */}
                <div className="flex flex-col items-center">
                    <QRCodeSection qrCodeUrl={qrCodeUrl} paymentMethod={payment_method} />
                </div>
            </div>
        </CustomerLayout>
    );
};

export default Index;
