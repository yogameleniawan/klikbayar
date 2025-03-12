import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Link } from '@inertiajs/react';
import { Image } from '@nextui-org/react';
import "swiper/css";
import 'swiper/css/effect-cards';

const items = [
    {
        "slug": "pubg",
        "image": "https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
    },
    {
        "slug": "mobile-legend",
        "image": "https://cdn.topupkuy.id/category/b7dad5cf-f304-40ca-b139-db6eb4f79654.webp"
    },
    {
        "slug": "pubg",
        "image": "https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
    },
]

const Promo = () => {
    return (
        <div className="flex flex-col items-center sm:gap-2">
            <h3 className="text-xl sm:text-4xl font-semibold">
                Promo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-8 h-8 text-orange-500 flame-animation">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                </svg>
            </h3>
            <span className="text-center text-[10px] sm:text-sm">
                Geser lalu pilih dan nikmati promonya!
            </span>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-32 h-50 sm:w-40 sm:h-full mt-2"
            >
                {
                    items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link href={route('customer.checkout', { slug: item.slug })}>
                                    <Image src={item.image} />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Promo
