import { useCheckoutStore } from '@/store/useCheckoutStore'
import { formatRupiah } from '@/utils/format_rupiah'
import { Image } from '@heroui/react'
import React from 'react'

const PaymentMethodCard = ({
    payment,
    name,
    price,
    logo,
    onClick
}) => {
    const checkoutStore = useCheckoutStore();

    return (
        <div onClick={() => onClick(payment)} className={`flex justify-between px-4 py-2 rounded-lg items-center hover:-translate-y-1 cursor-pointer hover:border-2 border-blue-500 transition-all duration-50 ${checkoutStore.checkout.payment == payment ? 'bg-blue-500 text-white' : 'bg-default-200'}`}>
            <div className="flex flex-col">
                <span className="font-bold">{name}</span>
                <span className="text-sm">{formatRupiah(price)}</span>
            </div>
            <Image src={route('logo.stream', {
                    filename: logo
                })} width={30} height={30} />
        </div>
    )
}

export default PaymentMethodCard
