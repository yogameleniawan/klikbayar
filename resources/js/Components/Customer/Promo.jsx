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
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-4xl font-semibold">Promo</h3>
            <span className="text-center text-sm">
                Geser lalu pilih dan nikmati promonya!
            </span>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-44 h-50 sm:w-52 sm:h-full mt-2"
            >
                {
                    items.map((item, i) => {
                        return (
                            <SwiperSlide>
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
