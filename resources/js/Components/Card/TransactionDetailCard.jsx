import React, { useState } from 'react';
import { Card, Button, Divider, Image, Alert } from '@heroui/react';
import { BiCheck, BiCopy, BiInfoCircle } from 'react-icons/bi';
import { router } from '@inertiajs/react';
import { formatRupiah } from '@/utils/format_rupiah';

const TransactionDetailCard = ({
    invoice_number,
    image,
    product_name,
    description,
    price,
    transaction_id,
    status
}) => {
    const [copied, setCopied] = useState(false);

    const copyInvoiceNumber = () => {
        navigator.clipboard.writeText(invoice_number);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Card className="w-full max-w-md shadow-lg overflow-hidden my-4 justify-self-center">
            {/* Header */}
            <div className="bg-blue-500 text-white p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Detail Transaksi</h2>
                </div>
            </div>

            {/* Nomor Transaksi */}
            <div className="p-4 bg-blue-50 dark:bg-default-100 text-gray-600 dark:text-white">
                <p className="text-sm mb-1 text-start">Nomor Transaksi</p>
                <div className="flex items-center justify-between">
                    <p className="font-mono font-bold">{invoice_number}</p>
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

            <div className="p-4">
                <div className="flex flex-col sm:flex-col md:flex-row gap-4">
                    <Image
                        src={route('stream', { path: image })}
                        alt={product_name}
                        className="w-full h-48 sm:h-auto object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg mb-1">{product_name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {description ? description.substring(0, 100) : 'Deskripsi produk'}...
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-default-100 p-2 rounded-lg">
                            <p className="text-sm text-gray-500 dark:text-gray-100">Harga</p>
                            <p className="text-xl font-bold text-blue-600">{formatRupiah(price)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Divider className="my-0" />

            <div className="flex flex-col p-4 gap-2">
                <div className="flex gap-2">
                    {
                        status === 'pending' && (
                            <Button
                                color="primary"
                                onPress={() => {
                                    router.visit(route('customer.detail-transaction', { id: transaction_id }))
                                }}
                            >
                                Lanjutkan Transaksi
                            </Button>
                        )
                    }
                    {
                        status === 'failed' && (
                            <Alert
                                color="danger"
                                description={`Transaksi ${invoice_number} gagal`}
                                isVisible={true}
                                title={"Gagal"}
                                variant="faded"
                                className='text-start my-4'
                            />
                        )
                    }
                    {
                        status === 'cancel' && (
                            <Alert
                                color="warning"
                                description={`Transaksi ${invoice_number} dibatalkan`}
                                isVisible={true}
                                title={"Dibatalkan"}
                                variant="faded"
                                className='text-start my-4'
                            />
                        )
                    }
                    {
                        status === 'expire' && (
                            <Alert
                                color="default"
                                description={`Transaksi ${invoice_number} Expired`}
                                isVisible={true}
                                title={"Expired"}
                                variant="faded"
                                className='text-start my-4'
                            />
                        )
                    }
                    {
                        status === 'success' && (
                            <Alert
                                color="success"
                                description={`Transaksi ${invoice_number} Success`}
                                isVisible={true}
                                title={"Success"}
                                variant="faded"
                                className='text-start my-4'
                            />
                        )
                    }
                </div>
            </div>
        </Card>
    );
};

export default TransactionDetailCard;
