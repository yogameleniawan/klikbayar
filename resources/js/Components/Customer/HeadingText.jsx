import React, { useEffect, useRef, useState } from "react";
import { BsFillBagCheckFill } from 'react-icons/bs'
import { RiCursorFill } from 'react-icons/ri'

const HeadingText = () => {
        const textRef = useRef(null);
        const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });

        useEffect(() => {
            const updateCursorPosition = () => {
                if (textRef.current) {
                    const rect = textRef.current.getBoundingClientRect();
                    setCursorPos({
                        top: rect.top + window.scrollY,
                        left: rect.left + window.scrollX + rect.width / 2,
                    });
                }
            };

            updateCursorPosition();
            window.addEventListener("resize", updateCursorPosition);

            return () => {
                window.removeEventListener("resize", updateCursorPosition);
            };
        }, []);

    return (
        <>
            <h1 className="text-center text-[clamp(2.125rem,1.142rem+3.659vw,4rem)] font-bold leading-none text-foreground">
                Cara Mudah Bertransaksi <br /> dengan{" "}
                <span className="relative">
                    <span className="text-blue-600 animate-pulse">Klik </span>
                    <RiCursorFill
                        className="z-10 absolute transition-transform duration-300 ease-in-out animate-move-loop"
                        style={{
                            top: `${cursorPos.top + 35}px`,
                            left: `${cursorPos.left + 35}px`,
                        }}
                        size={25}
                    />
                </span>
                lalu {" "}
                <span className="relative inline-flex items-center gap-2">
                    <span className="text-blue-600 animate-bayar">Bayar</span>
                    <BsFillBagCheckFill
                        className="z-1 text-blue-600 opacity-0 animate-[fadeIn_1.2s_ease-in-out_1.2s_forwards]"
                        size={50}
                    />
                </span>
            </h1>
            <p className="text-center text-base text-default-600 w-[250px] sm:w-[466px] md:text-lg md:leading-6">
                Eksplorasi semua fasilitas yang tidak sama dengan platform lainnya
                dengan harga yang bervariasi.
            </p>
        </>
    )
}

export default HeadingText
