import React from 'react'
import { Card, CardHeader, Image } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const Best = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-4xl font-semibold">Best of the Blast</h3>
            <span className="text-center text-sm">
                Waktunya kamu berpartisipasi untuk menjadi yang terbaik saat ini!
            </span>
            <div className="max-w-[500px] gap-2 grid grid-cols-12 grid-rows-1 px-8 mt-2">
                <Card className="col-span-12 sm:col-span-4 hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover blur-[3px]"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
                <Card className="col-span-12 sm:col-span-4 hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Moonton</p>
                            <h4 className="text-white font-medium text-large">Mobile Legend Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover blur-[3px]"
                            src="https://cdn.topupkuy.id/category/b7dad5cf-f304-40ca-b139-db6eb4f79654.webp"
                        />
                    </Link>
                </Card>
                <Card className="col-span-12 sm:col-span-4 hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover blur-[3px]"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default Best
