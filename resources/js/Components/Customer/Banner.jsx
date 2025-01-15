import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@nextui-org/react";

const items = [
    {
        id: 1,
        image: "https://storage.googleapis.com/fastwork-static/c87afb55-35d7-4197-b18a-99811ca4f718.jpg",
    },
    {
        id: 2,
        image: "https://storage.googleapis.com/fastwork-static/c87afb55-35d7-4197-b18a-99811ca4f718.jpg",
    },
]

const Banner = () => {
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
                        items.map((item, i) => {
                            return (
                                <SwiperSlide>
                                    <Image src={item.image} />
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
