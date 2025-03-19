import AlertCheckout from '@/Components/Alert/AlertCheckout';
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
        if (message != '' && message != null) {
            let messageData = JSON.parse(message);

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
                <AlertCheckout
                    sensoredPhone={sensoredPhone}
                    name={messageData.name}
                    brand={messageData.product.brand}
                    image={messageData.product.image_path}
                />,
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
