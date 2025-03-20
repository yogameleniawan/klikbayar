import React from 'react';
import { Head } from '@inertiajs/react';
import CustomerLayout from '@/Layouts/CustomerLayout';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="bg-white dark:bg-default-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center h-full"
    >
        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
);

const AboutUs = () => {
    return (
        <CustomerLayout>
            <Head title="Tentang Kami" />

            {/* Hero Section */}
            <div className="relative overflow-hidden">

                <div className="relative max-w-7xl mx-auto px-4 py-5 sm:px-6 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="error-number relative mb-8">
                            <div className="text-6xl font-bold text-blue-500/10 select-none">Tentang Kami</div>
                            <div className="absolute inset-0 top-10 flex items-center justify-center">
                                <div className="text-5xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                                    Tentang Kami
                                </div>
                            </div>
                        </div>
                        <p className="max-w-2xl mx-auto text-lg text-black dark:text-blue-100">
                            Platform pembayaran digital terdepan di Indonesia. Kami berkomitmen menyediakan layanan pembayaran yang aman, cepat, dan terpercaya.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                            Visi & Misi Kami
                        </h2>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Visi</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Menjadi platform pembayaran digital terkemuka yang menghadirkan kemudahan dan inovasi dalam setiap transaksi.
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Misi</h3>
                            <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                                <li>Menyediakan layanan pembayaran yang aman, cepat dan terpercaya</li>
                                <li>Mengembangkan teknologi inovatif untuk meningkatkan pengalaman pengguna</li>
                                <li>Memperluas akses layanan keuangan bagi semua lapisan masyarakat</li>
                                <li>Membangun ekosistem pembayaran digital yang terintegrasi</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-3">
                                Hubungi Kami
                            </h3>

                            {/* Email */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="text-blue-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                                    <a href="mailto:info@klikbayar.id" className="text-blue-600 dark:text-blue-400 hover:underline mt-1 block">
                                        info@klikbayar.id
                                    </a>
                                    <a href="mailto:support@klikbayar.id" className="text-blue-600 dark:text-blue-400 hover:underline block">
                                        support@klikbayar.id
                                    </a>
                                </div>
                            </div>

                            {/* Telepon */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="text-blue-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">Telepon</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                                        +62 21 5566 7788 (Kantor)
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        +62 812 3456 7890 (Layanan Pelanggan)
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Ikuti Kami</h4>
                                <div className="flex gap-4">
                                    <a href="https://instagram.com/klikbayar" className="flex gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-500 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <div>Instagram</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features/Values */}
            <div className="bg-gray-50 dark:bg-default-50">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
                        >
                            Nilai-Nilai Kami
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-600 dark:text-gray-300"
                        >
                            Kami selalu berpegang pada nilai-nilai yang membimbing setiap keputusan dan inovasi yang kami kembangkan.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<svg className="w-8 h-8 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>}
                            title="Keamanan"
                            description="Kami memprioritaskan keamanan dalam setiap transaksi dengan teknologi enkripsi terkini dan standar keamanan tertinggi."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<svg className="w-8 h-8 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>}
                            title="Kepercayaan"
                            description="Kepercayaan pelanggan adalah fondasi bisnis kami. Kami membangun hubungan jangka panjang dengan transparansi dan integritas."
                            delay={0.4}
                        />
                        <FeatureCard
                            icon={<svg className="w-8 h-8 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323c.11 0 .211.09.273.18l.52 1.3-.49.615A1.5 1.5 0 008.97 12.75a2.5 2.5 0 005.058 0h.472a1 1 0 100-2h-.472a2.5 2.5 0 00-4.55-1.515l.338-.424.117-.292a1 1 0 01.67-.514A1 1 0 0112.323 9H12a1 1 0 100-2h.96z" clipRule="evenodd"></path></svg>}
                            title="Inovasi"
                            description="Kami selalu mencari cara untuk mengembangkan teknologi dan layanan yang lebih baik, membawa solusi terbaru dalam industri pembayaran digital."
                            delay={0.6}
                        />
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-blue-600 z-0">
                    {/* Animation circles */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full animate-float-slow"></div>
                    <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full animate-float-reverse"></div>
                    <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-500/20 rounded-full animate-pulse"></div>

                    {/* Light rays */}
                    <div className="absolute top-0 left-1/2 w-1/3 h-full bg-gradient-to-b from-blue-300/20 to-transparent transform -rotate-45 animate-ray-shift"></div>
                    <div className="absolute bottom-0 right-1/4 w-1/4 h-1/2 bg-gradient-to-t from-indigo-400/20 to-transparent animate-ray-shift-reverse"></div>

                    {/* Moving particles */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/30"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                animation: `float-particle ${Math.random() * 10 + 15}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-8 md:mb-0"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Ingin Bekerja Sama Dengan Kami?
                        </h2>
                        <p className="text-blue-100">
                            Hubungi tim kami sekarang untuk mendiskusikan kebutuhan pembayaran digital Anda.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-md transition duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group">
                            <span className="relative z-10">Hubungi Kami</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </motion.div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default AboutUs;
