import { Link } from '@inertiajs/react'
import { Card, CardHeader, Chip, Image } from '@nextui-org/react'
import React from 'react'
import Category from './Components/Category'

const Catalog = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <Category />
            <div className="max-w-[700px] gap-2 grid grid-cols-2 sm:grid-cols-12 grid-rows-auto sm:grid-rows-1 px-8 mt-2">
                <Card className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
                <Card className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
                <Card className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
                <Card className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
                <Card className="sm:col-span-4 sm:hover:-translate-y-2">
                    <Link>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Garena</p>
                            <h4 className="text-white font-medium text-large">PUBG Mobile Indonesia</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
                        />
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default Catalog
