import Footer from '@/Components/Footer/Footer'
import CustomerNavbar from '@/Components/Navbar/CustomerNavbar'
import useWebSocket from '@/Hooks/useWebSocket';
import { Image } from '@heroui/react';
import { cn } from '@heroui/theme';
import { addToast } from '@heroui/toast';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

const CustomerLayout = ({ children }) => {
    const { message } = useWebSocket(
        'checkout-notification',
        'CheckoutEvent',
    );

    useEffect(() => {
        console.log({ message })
        if (message != '' && message != null) {
            let messageData = JSON.parse(message);
            console.log({ messageData });

            // Fungsi untuk mensensor nomor telepon
            const sensorPhone = (phone) => {
                if (!phone || phone.length < 6) return phone;

                const prefix = phone.substring(0, 2);
                const suffix = phone.substring(phone.length - 4);
                const maskedLength = phone.length - 6;
                const maskedPart = '*'.repeat(maskedLength);

                return `${prefix}${maskedPart}${suffix}`;
            };

            const sensoredPhone = sensorPhone(messageData.phone);

            toast(
                <div className="bg-blue-500 text-white p-3 rounded-r-3xl rounded-bl-3xl shadow-md">
                    <div className="flex items-center justify-between mb-2 bg-white p-2 rounded-r-2xl rounded-bl-2xl">
                        <h3 className="font-bold text-lg text-blue-500">Pembelian Baru!</h3>
                        <span className="bg-blue-600 px-2 py-1 rounded-md text-xs font-medium">SUKSES</span>
                    </div>

                    <p className="font-medium">{sensoredPhone} baru saja membeli</p>
                    <p className="text-sm text-blue-100 mb-3">{messageData.name}</p>

                    <div className="flex items-center gap-4 bg-blue-600/50 p-2 rounded-md">
                        <img
                            src={`${route('stream', { path: messageData.product.image_path })}`}
                            alt={messageData.product.brand}
                            className="w-16 h-16 object-cover rounded-md border-2 border-white/50"
                        />
                        <div>
                            <p className="font-bold text-white">{messageData.product.brand}</p>
                            <p className="text-sm text-blue-100">{messageData.name}</p>
                        </div>
                    </div>
                </div>,
                {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    type: 'primary',
                    theme: 'colored',
                    closeButton: false,
                    className: {
                        container: "!p-0",
                        body: "!p-0 !m-0 w-full",
                        toast: "!p-0 !m-0 w-full"
                    },
                    style: {
                        padding: 0,
                        margin: 0,
                        width: '100%',
                        maxWidth: '100%'
                    }
                }
            );
        }
    }, [message])

    return (
        <div className="flex flex-col h-full min-h-screen bg-default-50 dark:bg-default-50">
            <div className="sticky top-0 z-20">
                <CustomerNavbar />
            </div>

            <div className="flex-1 flex flex-col">
                {children}
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default CustomerLayout
