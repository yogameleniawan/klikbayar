import React, { useEffect, useRef, useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { Button, Chip, Input, Progress, Image, addToast, Accordion, AccordionItem } from '@heroui/react';

import PaymentMethodCard from '@/Components/Card/PaymentMethodCard';
import FormSection from '@/Components/Customer/Components/FormSection';
import { Star } from '@/Components/Icons/Icon';
import CustomerLayout from '@/Layouts/CustomerLayout';

import { formatRupiah } from '@/utils/format_rupiah';
import { useCheckoutStore } from '@/store/useCheckoutStore';
import { useMutation } from '@tanstack/react-query';

const FlameIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block w-8 h-8 text-orange-500 flame-animation"
    >
        <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
            clipRule="evenodd"
        />
    </svg>
);

const priceUtils = {
    withMargin: (price, margin) => price * (1 + margin / 100),
    withDiscount: (price, discount) => price * (1 - discount / 100),
    calculateFinal: (price, margin, discount, fee = 0) => {
        const priceWithMargin = priceUtils.withMargin(price, margin);
        const priceAfterDiscount = discount > 0
            ? priceUtils.withDiscount(priceWithMargin, discount)
            : priceWithMargin;

        return Math.floor(priceAfterDiscount + fee);
    }
};

const ItemProduct = ({ product, selected, onClick }) => {
    const { digiflazz, discount, margin } = product;
    const { price, product_name: name, buyer_product_status } = digiflazz;
    const isActive = buyer_product_status !== 0;
    const priceWithMargin = priceUtils.withMargin(price, margin);
    const finalPrice = priceUtils.calculateFinal(price, margin, discount);

    const handleClick = () => {
        if (isActive) {
            onClick(product, finalPrice);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`
                flex items-center gap-2 translate-y-0
                ${isActive ? 'bg-default-400/20 hover:-translate-y-2 hover:border-2 border-blue-500' : 'bg-gray-500/40 opacity-75'}
                transition-all rounded-xl cursor-pointer justify-between relative
                ${selected && isActive ? 'border-3 border-blue-500' : ''}
                ${!isActive ? 'cursor-not-allowed' : ''}
            `}
            style={{
                backgroundImage: isActive ? `url("/assets/bg.jpg")` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col text-white w-full gap-2 rounded-lg bg-black/10">
                <h4 className={`
                    text-md text-nowrap font-bold
                    ${selected && isActive
                        ? `bg-blue-500 p-2 rounded-t-md`
                        : !isActive
                            ? 'bg-gray-600 p-2 rounded-t-md text-gray-300'
                            : 'border-b-1 border-gray-500 p-2 rounded-t-xl'
                    }
                `}>
                    {name}
                </h4>

                {!isActive ? (
                    <div className="flex flex-col gap-2 p-2 items-center justify-center">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-300">Tidak Tersedia</span>
                        </div>
                        <span className="text-xs text-gray-400">Produk sedang nonaktif</span>
                    </div>
                ) : discount > 0 ? (
                    <div className="flex flex-col gap-2 p-2">
                        <div className="flex items-center gap-2">
                            <Chip className="text-[10px] bg-orange-500 text-white">{discount}%</Chip>
                            <span className="text-md">{formatRupiah(priceUtils.withDiscount(priceWithMargin, discount))}</span>
                        </div>
                        <div className="flex gap-1">
                            <span className="text-[10px]">Harga asli</span>
                            <span className="text-[10px] line-through">{formatRupiah(priceWithMargin)}</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 p-2">
                        <span className="text-lg">{formatRupiah(priceWithMargin)}</span>
                        <span className="text-xs text-orange-500">Harga terbaik</span>
                    </div>
                )}
            </div>

            {discount > 0 && isActive && (
                <div className="absolute right-2 top-1">
                    <FlameIcon />
                </div>
            )}

            {/* Tambahkan overlay nonaktif */}
            {!isActive && (
                <div className="absolute top-0 right-0 p-1 bg-red-500 text-white text-xs font-bold rounded-bl-lg rounded-tr-lg">
                    NONAKTIF
                </div>
            )}
        </div>
    );
};

const CheckoutPage = ({ product }) => {
    const [items, setItems] = useState(product.detail.map(item => ({
        ...item,
        selected: false
    })));

    const formSectionRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        }

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const {
        checkout,
        setCheckout,
        updateStep,
        getCheckoutSummary
    } = useCheckoutStore();

    const { product: productCheckout } = checkout;

    const handleProductClick = (product, price) => {
        setItems(prevItems =>
            prevItems.map(item => ({
                ...item,
                selected: item.id === product.id
            }))
        );

        setCheckout("product", {
            product_id: product.id,
            price: product.digiflazz.price,
            discount: product.discount,
            margin: product.margin,
            product_name: product.digiflazz.product_name,
            price_final: price
        });

        updateStep();

        if (isMobile && formSectionRef.current) {
            setTimeout(() => {
                const element = formSectionRef.current;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - 80; // Offset 100px ke atas

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    };

    const handlePaymentClick = (payment) => {
        setCheckout("payment", payment);
        updateStep();
    };

    const handleCustomerNoChange = (value) => {
        setCheckout("customer_no", value);
        updateStep();
    };

    const handlePhoneChange = (value) => {
        setCheckout("phone", value);
        updateStep();
    };

    const renderProductInfo = () => (
        <div className="flex flex-col items-center gap-8">
            <div
                className="w-full h-[200px] sm:h-[300px] bg-cover bg-center blur-sm"
                style={{
                    backgroundImage: `url(${route('stream', {
                        path: product.banner.path
                    })})`
                }}
            />

            <Image
                src={route('stream', {
                    path: product.image.path
                })}
                className="w-24 h-24 sm:w-40 sm:h-40 object-cover -my-20 sm:-my-28"
            />

            <div className="flex flex-col mt-0 sm:mt-8 gap-8 mb-8">
                <div className="flex flex-col justify-center text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex gap-2 items-center">
                            <span className="text-xl font-semibold">4.4</span>
                            <Star />
                        </div>
                        <span className="text-[12px] text-default-500">(139 reviews)</span>
                    </div>
                    <h1 className="font-bold text-2xl">{product.name}</h1>
                    <h1>{product.brand}</h1>
                    <p className="text-xs px-10 sm:px-40">{product.description}</p>
                </div>
            </div>
        </div>
    );

    const renderProductSelection = () => (
        <div className="w-full md:w-2/3">
            <FormSection title="Pilih Produk" number="1">
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 grid-rows-auto px-2 sm:px-8 mt-6 w-full">
                    {items.map((item, i) => (
                        <ItemProduct
                            key={i}
                            product={item}
                            selected={item.selected}
                            onClick={handleProductClick}
                        />
                    ))}
                </div>
            </FormSection>
        </div>
    );

    const renderFormSection = () => {
        const { price, discount, margin } = productCheckout;
        const finalPrice = priceUtils.calculateFinal(price, margin, discount);

        const { payment_methods } = usePage().props;

        return (
            <div className="flex flex-col w-full md:w-1/3 gap-8">
                <div ref={formSectionRef}>
                    <FormSection title="Lengkapi Informasi Berikut" number="2">
                        {JSON.parse(product.input).map((item, i) => (
                            <Input
                                key={i}
                                className="p-2"
                                isRequired
                                label={item.label}
                                name={item.name}
                                placeholder={item.placeholder}
                                type={item.type}
                                variant="bordered"
                                onBlur={(e) => handleCustomerNoChange(e.target.value)}
                            />
                        ))}
                    </FormSection>
                </div>

                <FormSection title="Kontak yang dapat dihubungi" number="3">
                    <Input
                        className="p-2"
                        isRequired
                        label="Nomor Whatsapp"
                        name="phone"
                        placeholder="contoh: 62812345xxxx"
                        type="number"
                        variant="bordered"
                        description="Kami akan menghubungi kontak ini, apabila terjadi sesuatu hal."
                        onBlur={(e) => handlePhoneChange(e.target.value)}
                    />
                </FormSection>

                <FormSection title="Pilih Metode Pembayaran" number="4">
                    <div className="flex flex-col w-full p-2 gap-4">
                        <Accordion>
                            {Object.entries(
                                payment_methods.reduce((acc, item) => {
                                    const category = item.category || 'Lainnya';
                                    if (!acc[category]) {
                                        acc[category] = [];
                                    }
                                    acc[category].push(item);
                                    return acc;
                                }, {})
                            ).map(([category, items]) => (
                                <AccordionItem
                                    key={category}
                                    aria-label={category}
                                    title={category}
                                    subtitle={`${items.length} metode pembayaran`}
                                    startContent={
                                        <div className="flex items-center gap-1">
                                            {items.slice(0, 2).map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="w-8 h-8 rounded-md border border-gray-200 p-1 flex items-center justify-center bg-white"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                </div>
                                            ))}
                                            {items.length > 2 && (
                                                <div className="w-8 h-8 rounded-md bg-default-300/40 dark:bg-default-200 flex items-center justify-center text-xs font-semibold">
                                                    +{items.length - 2}
                                                </div>
                                            )}
                                        </div>
                                    }
                                >
                                    <div className="flex flex-col gap-2 px-2 py-1">
                                        {items.map((item) => (
                                            <PaymentMethodCard
                                                key={item.id}
                                                payment={item.id}
                                                name={item.name}
                                                fee={item.fee}
                                                price={finalPrice}
                                                logo={item.image}
                                                onClick={handlePaymentClick}
                                            />
                                        ))}
                                    </div>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </FormSection>
            </div>
        );
    }

    const renderCheckoutSummary = () => {
        const { price, discount, margin, product_name, fee = 0 } = productCheckout;
        const priceWithMargin = priceUtils.withMargin(price, margin);
        const priceAfterDiscount = priceUtils.withDiscount(priceWithMargin, discount);
        const finalPrice = priceUtils.calculateFinal(price, margin, discount, fee); // Menggunakan fungsi yang sudah dimodifikasi

        const paymentMutation = useMutation({
            mutationFn: () => {
                return axios.post(route('api.midtrans.transaction'), getCheckoutSummary());
            },
            onSuccess: (res) => {
                addToast({
                    title: "Success",
                    description: res.data.message,
                    color: "success",
                })

                router.visit(route('customer.detail-transaction', { id: res.data.transaction_id }))
            },
            onError: (res) => {
                addToast({
                    title: res.response.statusText,
                    description: res.response.data.error,
                    color: "danger",
                })
            }
        })

        return (
            <div className={`${!productCheckout.price ? 'translate-y-96 transition-all duration-500' : 'translate-y-0 transition-all duration-500'} fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[99] flex w-full flex-col gap-4 rounded-t-3xl sm:rounded-3xl bg-default-100 shadow-2xl px-4 py-2 md:bottom-4 md:flex-row md:items-center md:justify-between md:rounded-xl md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl border-1 border-default-200`}>
                <div className="flex flex-col items-center sm:items-start">
                    {/* Price information section */}
                    <div className="flex gap-2 text-xs font-bold text-opacity-30 md:text-sm items-center">
                        {discount > 0 ? (
                            <>
                                <span className="leading-4 line-through text-gray-500">
                                    {formatRupiah(priceWithMargin)}
                                </span>
                                <span className="flex items-center rounded-lg bg-orange-500 px-2 py-1 text-xs text-white leading-none">
                                    {discount}%
                                </span>
                                <FlameIcon />
                            </>
                        ) : (
                            <span className="leading-4 text-orange-500">Harga terbaik</span>
                        )}
                    </div>

                    {/* Display price breakdown with fee if applicable */}
                    <div className="flex flex-col">
                        {fee > 0 && (
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs text-gray-600 dark:text-gray-100">
                                    {formatRupiah(discount > 0 ? priceAfterDiscount : priceWithMargin)}
                                </span>
                                <span className="text-xs text-gray-500">+</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                    {formatRupiah(fee)}
                                </span>
                            </div>
                        )}
                        <div className="text-2xl font-bold leading-9 text-blue-500">
                            {formatRupiah(finalPrice)}
                        </div>
                    </div>

                    <div className="text-xs font-semibold leading-6 md:text-sm mt-1">
                        {product_name}
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-2 sm:p-0">
                    <div className="flex justify-between text-xs">
                        <span>Langkah</span>
                        <span className="text-default-400">{checkout.step.position}/4</span>
                    </div>
                    <Progress
                        aria-label="Progress"
                        size="sm"
                        className="max-w-sm"
                        value={checkout.step.percent}
                    />
                    <Button
                        className="flex cursor-pointer bg-blue-500 p-3 justify-center text-white font-bold rounded-full w-full disabled:cursor-not-allowed disabled:brightness-75 hover:bg-blue-600 transition-colors"
                        disabled={checkout.step.position < 4}
                        onPress={() => {
                            paymentMutation.mutate()
                        }}
                        isLoading={paymentMutation.isPending}
                    >
                        Klik Bayar
                    </Button>
                    <div className="text-xs md:text-[8px] w-full sm:w-80 text-center sm:text-right">
                        Pastikan pesanan sudah sesuai, jika sudah sesuai maka Anda bisa melanjutkan proses pembelian dengan tombol Klik Bayar.
                    </div>
                </div>
            </div>
        );
    };

    return (
        <CustomerLayout>
            <Head title="Beranda" />

            {renderProductInfo()}

            <div className="flex flex-col md:flex-row gap-10 w-full px-10">
                {renderProductSelection()}
                {renderFormSection()}
            </div>

            {renderCheckoutSummary()}
        </CustomerLayout>
    );
};

export default CheckoutPage;
