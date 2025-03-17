import React, { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { Button, Chip, Input, Progress, Image, addToast } from '@heroui/react';

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
    calculateFinal: (price, margin, discount) => {
        const priceWithMargin = priceUtils.withMargin(price, margin);
        return Math.floor(discount > 0
            ? priceUtils.withDiscount(priceWithMargin, discount)
            : priceWithMargin);
    }
};

const ItemProduct = ({ product, selected, onClick }) => {
    const { digiflazz, discount, margin } = product;
    const { price, product_name: name } = digiflazz;
    const priceWithMargin = priceUtils.withMargin(price, margin);
    const finalPrice = priceUtils.calculateFinal(price, margin, discount);

    const handleClick = () => onClick(product, finalPrice);

    return (
        <div
            onClick={handleClick}
            className={`
        flex items-center gap-2 bg-default-400/20 translate-y-0
        hover:-translate-y-2 hover:border-2 border-blue-500 transition-all
        rounded-xl cursor-pointer justify-between relative
        ${selected ? 'border-3 border-blue-500' : ''}
      `}
            style={{
                backgroundImage: `url("/assets/bg.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col text-white w-full gap-2 rounded-lg bg-black/10">
                <h4 className={`
          text-md text-nowrap font-bold
          ${selected
                        ? `bg-blue-500 p-2 rounded-t-md`
                        : 'border-b-1 border-gray-500 p-2 rounded-t-xl'
                    }
        `}>
                    {name}
                </h4>

                {discount > 0 ? (
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

            {discount > 0 && (
                <div className="absolute right-2 top-1">
                    <FlameIcon />
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
    };

    const handlePaymentClick = (payment) => {
        console.log(payment)
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
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 grid-rows-auto px-8 mt-6 w-full">
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

        console.log({ payment_methods })

        return (
            <div className="flex flex-col w-full md:w-1/3 gap-8">
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
                    <div className="flex flex-col w-full p-2 gap-2">
                        {
                            payment_methods.map((item) => (
                                <PaymentMethodCard
                                    key={item.id}
                                    payment={item.id}
                                    name={item.name}
                                    price={finalPrice}
                                    logo={item.image.path}
                                    onClick={handlePaymentClick}
                                />
                            ))
                        }
                    </div>
                </FormSection>
            </div>
        );
    }

    const renderCheckoutSummary = () => {
        const { price, discount, margin, product_name } = productCheckout;
        const priceWithMargin = priceUtils.withMargin(price, margin);
        const finalPrice = priceUtils.calculateFinal(price, margin, discount);

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

                router.visit(route('customer.detail-transaction', {id: res.data.transaction_id}))
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
                    <div className="flex gap-2 text-xs font-bold text-opacity-30 md:text-sm items-center">
                        {discount > 0 ? (
                            <>
                                <span className="leading-4 line-through">
                                    {formatRupiah(priceWithMargin)}
                                </span>
                                <span className="flex items-center rounded-lg bg-orange-500 px-2 py-1 text-xs leading-none">
                                    {discount}%
                                </span>
                                <FlameIcon />
                            </>
                        ) : (
                            <span className="leading-4 text-orange-500">Harga terbaik</span>
                        )}
                    </div>
                    <div className="text-2xl font-bold leading-9 text-blue-500">
                        {formatRupiah(finalPrice)}
                    </div>
                    <div className="text-xs font-semibold leading-6 md:text-sm">
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
                        className="flex cursor-pointer bg-blue-500 p-3 justify-center text-white font-bold rounded-full w-full disabled:cursor-not-allowed disabled:brightness-75"
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
