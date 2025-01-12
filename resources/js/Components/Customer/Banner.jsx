import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@nextui-org/react";

const Banner = () => {
    return (
        <div className="w-full max-w-screen-lg">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="w-full"
            >
                <SwiperSlide>
                    <Image src="https://storage.googleapis.com/fastwork-static/c87afb55-35d7-4197-b18a-99811ca4f718.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://storage.googleapis.com/fastwork-static/c87afb55-35d7-4197-b18a-99811ca4f718.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
