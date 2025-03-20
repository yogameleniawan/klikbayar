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
    onClick
}) => {
    const checkoutStore = useCheckoutStore();
    const hasFee = fee > 0;
    const totalPrice = price + fee;
    const isSelected = checkoutStore.checkout.payment == payment;

    const handleClick = () => {
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
                flex justify-between px-4 py-3 rounded-xl items-center cursor-pointer
                transition-all duration-300 shadow-sm hover:shadow-md
                ${isSelected
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-2 border-blue-500 transform -translate-y-1'
                    : 'bg-white dark:bg-default-200 hover:border-2 border-blue-300 hover:-translate-y-1'
                }
            `}
        >
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className={`font-bold text-base ${isSelected ? 'text-white' : 'text-default-500 dark:text-white'}`}>
                        {name}
                    </span>
                </div>

                {hasFee ? (
                    <div className="mt-1">
                        <div className="flex items-center gap-2">
                            <span className={`text-sm ${isSelected ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'} line-through`}>
                                {formatRupiah(price)}
                            </span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200'}`}>
                                + {formatRupiah(fee)}
                            </span>
                        </div>
                        <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-blue-600 dark:text-blue-300'} mt-1 block`}>
                            {formatRupiah(totalPrice)}
                        </span>
                    </div>
                ) : (
                    <span className={`text-sm font-bold mt-1 ${isSelected ? 'text-white' : 'text-blue-600 dark:text-blue-300'}`}>
                        {formatRupiah(price)}
                    </span>
                )}
            </div>

            <div className={`
                h-12 w-12 flex items-center justify-center rounded-xl overflow-hidden
                ${isSelected ? 'bg-white p-1 shadow-inner' : 'bg-gray-100 dark:bg-gray-100'}
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
