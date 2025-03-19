import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import CustomerLayout from '@/Layouts/CustomerLayout';
import { gsap } from 'gsap';
const NotFound = () => {
    // Efek animasi untuk elemen-elemen pada halaman
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".error-number", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 })
          .fromTo(".error-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .fromTo(".error-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .fromTo(".error-actions", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    }, []);

    return (
        <CustomerLayout>
            <Head title="Halaman Tidak Ditemukan" />

            <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
                {/* Content */}
                <div className="z-10 max-w-lg w-full text-center">
                    <div className="error-number relative mb-8">
                        <div className="text-9xl font-bold text-blue-600/10 select-none">404</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                404
                            </div>
                        </div>
                    </div>

                    <h1 className="error-title text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Ups! Halaman Tidak Ditemukan
                    </h1>

                    <p className="error-description text-gray-600 dark:text-gray-300 mb-8">
                        Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin alamat URL
                        salah, halaman telah dipindahkan, atau halaman tidak lagi tersedia.
                    </p>

                    <div className="error-actions flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={route('customer.beranda')}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Kembali ke Beranda
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Kembali ke Halaman Sebelumnya
                        </button>
                    </div>
                </div>

                {/* Decorative wave at bottom */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-blue-50 dark:text-blue-100/10">
                        <path fill="currentColor" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default NotFound;
