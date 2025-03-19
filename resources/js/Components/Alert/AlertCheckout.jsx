import React, { useEffect } from 'react';
import { ShoppingBag, Check, Bell, ArrowRight } from 'lucide-react';
import { Image } from '@heroui/react';

const AlertCheckout = ({
    sensoredPhone,
    name,
    image,
    brand
}) => {
    // Efek animasi entrance
    useEffect(() => {
        const alertElement = document.getElementById('alertCheckout');
        if (alertElement) {
            alertElement.classList.add('animate-entrance');
        }
    }, []);

    return (
        <div
            id="alertCheckout"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 my-2 rounded-r-3xl rounded-bl-3xl shadow-lg relative overflow-hidden transform transition-all duration-500 hover:scale-102 animate-slideIn"
        >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 -mr-16 -mt-16 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-700 rounded-full opacity-20 -ml-12 -mb-12 animate-pulse"></div>

            <div className="flex items-center justify-between mb-3 bg-white p-3 rounded-r-2xl rounded-bl-2xl shadow-sm relative z-10">
                <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-500 animate-ringBell" />
                    <h3 className="font-bold text-sm text-blue-600">Pembelian Baru!</h3>
                </div>
                <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-400 px-3 py-1 rounded-full text-xs font-medium shadow-sm relative overflow-hidden group">
                    <Check className="w-3 h-3 animate-successCheck" />
                    <div className="relative">
                        <span className="animate-successTextSlide">S</span>
                        <span className="animate-successTextSlide animation-delay-50">U</span>
                        <span className="animate-successTextSlide animation-delay-100">K</span>
                        <span className="animate-successTextSlide animation-delay-150">S</span>
                        <span className="animate-successTextSlide animation-delay-200">E</span>
                        <span className="animate-successTextSlide animation-delay-250">S</span>
                    </div>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="absolute -inset-1 blur-md bg-green-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                </div>
            </div>

            <div className="relative z-10">
                <p className="font-medium flex items-center gap-2 animate-fadeIn">
                    <ShoppingBag className="w-4 h-4 animate-bounce" />
                    <span>{sensoredPhone} baru saja membeli</span>
                </p>
                <p className="text-sm text-blue-100 mb-3 pl-6 animate-fadeIn animation-delay-100">{name}</p>
            </div>

            <div className="flex items-center gap-4 bg-blue-700/60 p-3 rounded-lg shadow-inner border border-blue-400/30 backdrop-blur-sm relative z-10 transform transition-all hover:scale-102 animate-fadeIn animation-delay-200">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-300 rounded-md animate-pulse opacity-50"></div>
                    <img
                        src={`${route('stream', { path: image })}`}
                        alt={brand}
                        className="w-16 h-16 object-cover rounded-md border-2 border-white/70 relative z-10"
                    />
                </div>
                <div>
                    <p className="font-bold text-white flex items-center gap-1">
                        {brand}
                        <ArrowRight className="w-4 h-4 ml-1 animate-slideRight" />
                    </p>
                    <p className="text-sm text-blue-100">{name}</p>
                </div>
            </div>

            {/* Konfeti animasi */}
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-confetti1"></div>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-confetti2"></div>
            <div className="absolute top-0 left-3/4 w-1 h-1 bg-pink-300 rounded-full animate-confetti3"></div>
        </div>
    );
};

export default AlertCheckout;
