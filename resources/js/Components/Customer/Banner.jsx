import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@nextui-org/react";
import { usePage } from "@inertiajs/react";

const Banner = () => {
    const banners = usePage().props.banners;

    return (
        <div className="flex w-full justify-center py-5 animate-gradient">
            <div className="w-full max-w-screen-lg">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="w-full"
                >
                    {
                        banners.map((item, i) => {
                            return (
                                <SwiperSlide>
                                    <Image src={route('stream', {
                                        path: item.file.path
                                    })} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Banner
