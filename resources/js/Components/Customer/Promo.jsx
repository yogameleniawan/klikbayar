import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Link, usePage } from '@inertiajs/react';
import { Image } from '@heroui/react';
import "swiper/css";
import 'swiper/css/effect-cards';

const Promo = () => {
    const { product_promos } = usePage().props;

    useEffect(() => {
        setTimeout(() => {
            const slides = document.querySelectorAll('.swiper-slide');

            slides.forEach(slide => {
                if (!slide.querySelector('.promo-badge')) {
                    const badge = document.createElement('div');
                    badge.className = 'promo-badge';
                    badge.innerHTML = 'PROMO 🔥';
                    badge.style.position = 'absolute';
                    badge.style.top = '5px';
                    badge.style.right = '5px';
                    badge.style.backgroundColor = '#ef4444';
                    badge.style.color = 'white';
                    badge.style.padding = '3px 6px';
                    badge.style.borderRadius = '4px';
                    badge.style.fontSize = '10px';
                    badge.style.fontWeight = 'bold';
                    badge.style.zIndex = '100';
                    badge.style.boxShadow = '0 1px 2px rgba(0,0,0,0.3)';
                    slide.style.overflow = 'visible';
                    slide.appendChild(badge);
                }
            });
        }, 500);
    }, [product_promos]);

    return (
        <div className="flex flex-col items-center sm:gap-2">
            <h3 className="text-xl sm:text-4xl font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-8 h-8 mx-2 text-orange-500 flame-animation">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                </svg>
                Promo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-8 h-8 mx-2 text-orange-500 flame-animation">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                </svg>
            </h3>
            <span className="text-center text-[10px] sm:text-sm">
                Geser lalu pilih dan nikmati promonya!
            </span>

            <div className="mt-2">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-28 h-50 sm:w-40 sm:h-full"
                >
                    {
                        product_promos.map((item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Link href={route('customer.checkout', { slug: item.product.slug })}>
                                        <Image
                                            src={route('stream', {
                                                path: item.product.image.path
                                            })}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Promo
