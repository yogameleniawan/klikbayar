import React, { useEffect, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import CustomerLayout from '@/Layouts/CustomerLayout';
import { gsap } from 'gsap';
import { addToast, Alert, Button, Input } from "@heroui/react";
import { useMutation } from '@tanstack/react-query';
import TransactionDetailCard from '@/Components/Card/TransactionDetailCard';

const SearchIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};

const Index = () => {
    const { data, setData, reset } = useForm({
        input: '',
    });

    const [response, setResponse] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    // Efek animasi untuk elemen-elemen pada halaman
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".error-number", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 })
            .fromTo(".error-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
            .fromTo(".error-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
            .fromTo(".error-actions", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    }, []);

    const checkMutation = useMutation({
        mutationFn: () => {
            return axios.get(route('api.transactions.detail', { number: data.input }));
        },
        onSuccess: (res) => {
            console.log(res.data)
            reset()
            setResponse(res.data.data)
        },
        onError: (res) => {
            setIsVisible(true)
            setResponse(res.response.data)
        }
    })

    return (
        <CustomerLayout>
            <Head title="Halaman Tidak Ditemukan" />

            <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 mt-10 relative overflow-hidden">
                {/* Content */}
                <div className="z-10 max-w-lg w-full text-center">
                    <div className="error-number relative mb-8">
                        <div className="text-6xl font-bold text-blue-600/10 select-none">Cek Transaksi</div>
                        <div className="absolute inset-0 top-10 flex items-center justify-center">
                            <div className="text-5xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Cek Transaksi
                            </div>
                        </div>
                    </div>

                    <p className="error-description text-gray-600 dark:text-gray-300 mb-8">
                        Masukkan nomor invoice atau nomor telepon untuk melacak status transaksi Anda.
                    </p>

                    <div className="flex items-center gap-2">
                        <Input
                            isClearable
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-default-200/50",
                                    "dark:bg-default/60",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "dark:hover:bg-default/70",
                                    "group-data-[focus=true]:bg-default-200/50",
                                    "dark:group-data-[focus=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            defaultValue={data.input}
                            label="Cari Transaksi"
                            placeholder="contoh: KLIK-**** / 62******"
                            radius="lg"
                            startContent={
                                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                            onChange={(e) => setData("input", e.target.value)}
                        />
                        <Button isLoading={checkMutation.isPending} onPress={() => {
                            checkMutation.mutate()
                        }}>Cari</Button>
                    </div>

                    {
                        isVisible && (
                            <Alert
                                color={"danger"}
                                description={response.message}
                                isVisible={response.status === 'failed'}
                                title={"Ups!"}
                                variant="faded"
                                className='text-start my-4'
                                onClose={() => setIsVisible(false)}
                            />
                        )
                    }
                    {response && response.transaction && (
                        <TransactionDetailCard
                            invoice_number={response.transaction.invoice_number}
                            image={response.transaction.transaction_detail?.[0]?.product_detail?.product?.image?.path}
                            product_name={response.transaction.transaction_detail?.[0]?.name}
                            description={response.transaction.transaction_detail?.[0]?.product_detail?.product?.description}
                            price={response.transaction.transaction_detail?.[0]?.price}
                            transaction_id={response.transaction.id}
                            status={response.transaction.status}
                        />
                    )}
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

export default Index;
