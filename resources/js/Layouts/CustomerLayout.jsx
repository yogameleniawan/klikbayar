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
            <div className="absolute inset-0 overflow-hidden z-10">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-blue-500/10"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 8 + 2}rem`,
                            height: `${Math.random() * 8 + 2}rem`,
                            animation: `${Math.random() > 0.6 ? 'float' : Math.random() > 0.3 ? 'floatAlt' : 'floatSmall'} ${60}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 15}s`,
                            opacity: 0,
                        }}
                    />
                ))}
            </div>
            <div className="sticky top-0 z-30">
                <CustomerNavbar />
            </div>

            <div className="flex-1 flex flex-col z-20">
                {children}
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
            <style jsx>{`
            @keyframes float {
                0% {
                    transform: translateX(0) translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    transform: translateX(10vw) translateY(-5vh) rotate(36deg);
                    opacity: 0.7;
                }
                25% {
                    transform: translateX(50vw) translateY(-30vh) rotate(90deg);
                    opacity: 0.7;
                }
                50% {
                    transform: translateX(80vw) translateY(0) rotate(180deg);
                    opacity: 0.5;
                }
                75% {
                    transform: translateX(30vw) translateY(40vh) rotate(270deg);
                    opacity: 0.7;
                }
                90% {
                    transform: translateX(10vw) translateY(10vh) rotate(324deg);
                    opacity: 0.7;
                }
                100% {
                    transform: translateX(0) translateY(0) rotate(360deg);
                    opacity: 0;
                }
            }

            /* Variasi kedua untuk arah yang berbeda */
            @keyframes floatAlt {
                0% {
                    transform: translateX(0) translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    transform: translateX(-10vw) translateY(5vh) rotate(-36deg);
                    opacity: 0.6;
                }
                25% {
                    transform: translateX(-40vw) translateY(20vh) rotate(-90deg);
                    opacity: 0.6;
                }
                50% {
                    transform: translateX(-70vw) translateY(-15vh) rotate(-180deg);
                    opacity: 0.4;
                }
                75% {
                    transform: translateX(-30vw) translateY(-40vh) rotate(-270deg);
                    opacity: 0.6;
                }
                90% {
                    transform: translateX(-10vw) translateY(-10vh) rotate(-324deg);
                    opacity: 0.6;
                }
                100% {
                    transform: translateX(0) translateY(0) rotate(-360deg);
                    opacity: 0;
                }
            }

            /* Variasi ketiga untuk elemen lebih kecil */
            @keyframes floatSmall {
                0% {
                    transform: translateX(0) translateY(0) scale(1) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    transform: translateX(10vw) translateY(-5vh) scale(1.2) rotate(36deg);
                    opacity: 0.5;
                }
                20% {
                    transform: translateX(30vw) translateY(-20vh) scale(1.5) rotate(72deg);
                    opacity: 0.6;
                }
                40% {
                    transform: translateX(60vw) translateY(10vh) scale(1) rotate(144deg);
                    opacity: 0.4;
                }
                60% {
                    transform: translateX(40vw) translateY(30vh) scale(0.8) rotate(216deg);
                    opacity: 0.6;
                }
                80% {
                    transform: translateX(10vw) translateY(15vh) scale(1.2) rotate(288deg);
                    opacity: 0.5;
                }
                90% {
                    transform: translateX(5vw) translateY(5vh) scale(1.1) rotate(324deg);
                    opacity: 0.3;
                }
                100% {
                    transform: translateX(0) translateY(0) scale(1) rotate(360deg);
                    opacity: 0;
                }
            }
        `}</style>
        </div>
    )
}

export default CustomerLayout
