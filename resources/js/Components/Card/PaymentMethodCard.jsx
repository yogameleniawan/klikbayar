import { useCheckoutStore } from '@/store/useCheckoutStore'
import { formatRupiah } from '@/utils/format_rupiah'
import { Image } from '@heroui/react'
import React from 'react'

const PaymentMethodCard = ({
    payment,
    name,
    fee,
    price,
    logo,
    enabled,
    onClick,
    disabled = false
}) => {
    const checkoutStore = useCheckoutStore();
    const hasFee = fee > 0;
    const totalPrice = price + fee;
    const isSelected = checkoutStore.checkout.payment == payment;
    const isPaymentNull = checkoutStore.checkout.product.product_id === "";
    const isDisabled = disabled || isPaymentNull;

    console.log({ enabled })

    const handleClick = () => {
        if (isDisabled || enabled !== 1) return;

        onClick(payment);

        if (checkoutStore.checkout.product) {
            const currentProduct = checkoutStore.checkout.product;
            checkoutStore.setCheckout("product", {
                ...currentProduct,
                fee: fee,
            });
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`
                flex justify-between px-4 py-3 rounded-xl items-center
                transition-all duration-300 shadow-sm
                ${isDisabled || enabled !== 1
                    ? 'bg-gray-100 dark:bg-gray-700 opacity-60 cursor-not-allowed'
                    : isSelected
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-2 border-blue-500 transform -translate-y-1 cursor-pointer'
                        : 'bg-white dark:bg-default-200 hover:border-2 border-blue-300 hover:-translate-y-1 hover:shadow-md cursor-pointer'
                }
            `}
        >
            <div className="flex flex-col">
                {(isDisabled || enabled !== 1) && (
                    <span className="bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 text-xs px-2 py-0.5 rounded-full mb-2">
                        {enabled !== 1 && 'Tidak Tersedia'}
                        {isDisabled && enabled === 1 && 'Pilih Produk Terlebih Dahulu'}
                    </span>
                )}
                <div className="flex items-center gap-2">
                    <span className={`font-bold text-base ${isDisabled || enabled !== 1
                        ? 'text-gray-500 dark:text-gray-400'
                        : isSelected
                            ? 'text-white'
                            : 'text-default-500 dark:text-white'
                        }`}>
                        {name}
                    </span>
                </div>

                {hasFee ? (
                    <div className="mt-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className={`text-sm ${isDisabled
                                ? 'text-gray-400 dark:text-gray-500'
                                : isSelected
                                    ? 'text-blue-100'
                                    : 'text-gray-500 dark:text-gray-400'
                                } line-through`}>
                                {formatRupiah(price)}
                            </span>
                            <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${isDisabled
                                ? 'text-gray-400 dark:text-gray-500'
                                : isSelected
                                    ? 'text-orange-300'
                                    : 'text-orange-500'
                                }`}>
                                + {formatRupiah(fee)}
                            </span>
                        </div>
                        <span className={`text-sm font-bold ${isDisabled
                            ? 'text-gray-500 dark:text-gray-400'
                            : isSelected
                                ? 'text-white'
                                : 'text-blue-600 dark:text-blue-300'
                            } mt-1 block`}>
                            {formatRupiah(totalPrice)}
                        </span>
                    </div>
                ) : (
                    <span className={`text-sm font-bold mt-1 ${isDisabled
                        ? 'text-gray-500 dark:text-gray-400'
                        : isSelected
                            ? 'text-white'
                            : 'text-blue-600 dark:text-blue-300'
                        }`}>
                        {formatRupiah(price)}
                    </span>
                )}
            </div>

            <div className={`
                h-12 w-12 flex items-center justify-center rounded-xl overflow-hidden
                ${isDisabled
                    ? 'bg-gray-200 dark:bg-gray-600 grayscale opacity-50'
                    : isSelected
                        ? 'bg-white p-1 shadow-inner'
                        : 'bg-gray-100 dark:bg-gray-100'
                }
            `}>
                <Image
                    src={logo}
                    width={40}
                    height={40}
                    className='object-contain'
                    alt={name}
                />
            </div>
        </div>
    )
}

export default PaymentMethodCard
