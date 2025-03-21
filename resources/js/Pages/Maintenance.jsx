import React from 'react';
import { Head } from "@inertiajs/react";
import CustomerLayout from '@/Layouts/CustomerLayout';

const Index = () => {
    return (
        <CustomerLayout>
            <Head title="Maintenance" />

            <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
                <div className="flex flex-col gap-4 max-w-xl w-full text-center">
                    <div className="error-number relative mb-8">
                        <div className="text-4xl sm:text-6xl font-bold text-blue-500/10 select-none">Maintenance</div>
                        <div className="absolute inset-0 top-10 flex items-center justify-center">
                            <div className="text-2xl sm:text-5xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                                Maintenance
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-default-100 rounded-lg shadow-xl p-8 animate-slide-up">
                        <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                            We're currently updating our systems to serve you better.
                            Please check back soon.
                        </p>

                        {/* Progress Bar Animation */}
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                            <div className="h-full bg-blue-500 rounded-full animate-progress"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 space-x-2 text-sm text-gray-500 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Estimated completion: 30 minutes</span>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex items-center text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="font-medium">Need urgent assistance?</p>
                            </div>
                            <p className="mt-1 text-sm text-blue-600">
                                Please contact our support team at <a href="mailto:support@klikbayar.id" className="underline hover:text-blue-800">support@klikbayar.id</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(0.95); }
                }

                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }

                @keyframes slide-up {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }

                @keyframes progress {
                    0% { width: 0%; }
                    50% { width: 70%; }
                    100% { width: 90%; }
                }

                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 0.7s ease-out forwards;
                }

                .animate-progress {
                    animation: progress 3s ease-in-out infinite alternate;
                }
            `}</style>
        </CustomerLayout>
    );
};

export default Index;
