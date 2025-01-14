import React from 'react'
import { Button, Card, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const Best = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-4xl font-semibold">Best of the Blast</h3>
            <span className="text-center text-sm mx-2">
                Waktunya kamu berpartisipasi untuk menjadi yang terbaik saat ini!
            </span>
            <div className="max-w-[500px] gap-2 grid grid-cols-3 sm:grid-cols-12 grid-rows-auto sm:grid-rows-1 px-8 mt-2">
                <Card isFooterBlurred className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                        <CardFooter className="hidden sm:flex flex-col gap-2 text-center justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <Chip className="bg-gradient-to-r from-cyan-500 to-blue-500" size='sm'>
                                Garena
                            </Chip>
                            <p className="text-tiny text-white/80">PUBG Mobile Indonesia</p>
                        </CardFooter>
                    </Link>
                </Card>
                <Card isFooterBlurred className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/b7dad5cf-f304-40ca-b139-db6eb4f79654.webp"
                        />
                        <CardFooter className="hidden sm:flex flex-col gap-2 text-center justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <Chip className="bg-gradient-to-r from-cyan-500 to-blue-500" size='sm'>
                                Moonton
                            </Chip>
                            <p className="text-tiny text-white/80">Mobile Legend Indonesia</p>
                        </CardFooter>
                    </Link>
                </Card>
                <Card isFooterBlurred className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                        <CardFooter className="hidden sm:flex flex-col gap-2 text-center justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <Chip className="bg-gradient-to-r from-cyan-500 to-blue-500" size='sm'>
                                Garena
                            </Chip>
                            <p className="text-tiny text-white/80">PUBG Mobile Indonesia</p>
                        </CardFooter>
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default Best
