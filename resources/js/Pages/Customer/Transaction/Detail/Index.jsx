import CustomerLayout from '@/Layouts/CustomerLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { Image, Card, Divider, Button, addToast } from '@heroui/react';
import { BiCopy, BiInfoCircle, BiCheck } from 'react-icons/bi';
import { VscSync } from "react-icons/vsc";
import { formatRupiah } from '@/utils/format_rupiah';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useWebSocket from '@/Hooks/useWebSocket';
import CancelTransactionModal from '@/Components/Modal/CancelTransactionModal';
import { Copy, CheckCircle } from 'lucide-react';
import ReviewModal from '@/Components/Modal/ReviewModal';
import ReviewStatusDisplay from '@/Components/ReviewStatusDisplay';

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
const TransactionDetails = ({ transaction, payment_method }) => {
    const { transaction_detail, product, image } = transaction;

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
                        <p className="text-xl font-bold text-blue-600">{formatRupiah(transaction_detail[0].price + payment_method.fee)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Komponen QRCodeSection
const QRCodeSection = ({ qrCodeUrl, paymentMethod }) => {
    if (!qrCodeUrl) {
        return;
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

const VirtualAccountSection = ({ vaNumber, paymentMethod, paymentUrl }) => {
    const [copied, setCopied] = useState(false);

    if (!vaNumber) {
        return;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(vaNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            {/* VA Number Card */}
            <div className="rounded-lg p-4 bg-white dark:bg-default-100 shadow-sm">
                <div className="flex flex-col space-y-2">
                    <div className="text-sm font-medium text-gray-500">Virtual Account Number</div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="text-xl font-bold tracking-wider">{vaNumber}</div>
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            {copied ? (
                                <>
                                    <CheckCircle size={18} className="text-green-500" />
                                    <span className="text-sm font-medium text-green-500">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={18} />
                                    <span className="text-sm font-medium">Copy</span>
                                </>
                            )}
                        </button>
                    </div>
                    {/* <Button color='primary' onPress={() => {
                        window.location.href = paymentUrl
                    }}>Halaman Pembayaran</Button> */}
                </div>
            </div>

            {/* Payment Guide */}
            <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg shadow-sm">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray-800">
                        <BiInfoCircle size={20} className="text-yellow-500" />
                        <h3 className="font-medium">Panduan Pembayaran</h3>
                    </div>
                    <div
                        className="prose max-w-full text-gray-700"
                        dangerouslySetInnerHTML={{ __html: paymentMethod.description }}
                    />
                </div>
            </div>
        </div>
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

    const handleCheckStatus = () => {
        checkStatusMutation.mutate();
    };

    return (
        <div className="flex gap-2 w-full">
            <Button
                className='w-full'
                color="primary"
                startContent={<VscSync className={checkStatusMutation.isPending ? "animate-spin" : ""} />}
                isLoading={checkStatusMutation.isPending}
                onPress={handleCheckStatus}
                isDisabled={checkStatusMutation.isPending}
            >
                Cek Status
            </Button>
        </div>
    );
};

const Index = ({ transaction }) => {
    const [copied, setCopied] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(transaction.status || "Menunggu Pembayaran");

    const { transaction_detail, transaction_log, payment_method, product_review } = transaction;
    const { product_detail } = transaction_detail[0];
    const { product } = product_detail;
    const { image } = product;

    const response = transaction_log?.[0]?.response
        ? JSON.parse(transaction_log[0].response)
        : null;

    const { vaNumber, paymentUrl } = response;
    const qrCodeUrl = response?.actions?.[0]?.url || null;

    const copyInvoiceNumber = () => {
        navigator.clipboard.writeText(transaction.invoice_number);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
            <div className="flex flex-col sm:flex-row justify-center py-8 px-4 md:px-0 gap-4 mx-8">
                {/* Card Transaksi */}
                <Card className="w-full max-w-md shadow-lg overflow-hidden h-fit">
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
                        payment_method={payment_method}
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
                        {
                            currentStatus !== 'review' ? (
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-100">Status Transaksi</p>
                                    <p className={`px-2 py-1 text-xs rounded-full ${currentStatus === 'success' ? 'bg-green-500  text-white dark:bg-green-400 dark:text-default-100' :
                                        currentStatus === 'failed' || currentStatus === 'cancel' || currentStatus === 'expire' ? 'bg-red-600 dark:bg-red-400' :
                                            'bg-gray-800 dark:bg-gray-100 dark:text-gray-500'
                                        }`}>
                                        {currentStatus === 'success' ? 'Berhasil' :
                                            currentStatus === 'pending' ? 'Menunggu Pembayaran' :
                                                currentStatus === 'failed' ? 'Gagal' :
                                                    currentStatus === 'cancel' ? 'Dibatalkan' :
                                                        currentStatus === 'expire' ? 'Expired' :
                                                            currentStatus || "Menunggu Pembayaran"}
                                    </p>
                                </div>
                            ) : (
                                <ReviewStatusDisplay rating={product_review[0]?.rating || 0} reviewText={product_review[0]?.review || ""} />
                            )
                        }


                        {/* Tombol Aksi */}
                        {
                            currentStatus === 'pending' && (
                                <PaymentActions
                                    transactionId={transaction.id}
                                    onStatusUpdate={handleStatusUpdate}
                                />
                            )
                        }

                        {
                            currentStatus === 'success' && (
                                <ReviewModal transactionId={transaction.id} onStatusUpdate={handleStatusUpdate} />
                            )
                        }

                    </div>
                </Card>

                {/* QR Code dan Panduan */}
                <div className="flex flex-col items-center">
                    <QRCodeSection qrCodeUrl={qrCodeUrl} paymentMethod={payment_method} />
                    <VirtualAccountSection vaNumber={vaNumber} paymentMethod={payment_method} paymentUrl={paymentUrl} />
                </div>
            </div>
        </CustomerLayout>
    );
};

export default Index;
