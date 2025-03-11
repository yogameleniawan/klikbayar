import { Link, usePage } from '@inertiajs/react'
import { Card, CardHeader, Chip, Image } from '@nextui-org/react'
import React from 'react'
import Category from './Components/Category'

const items = [
    {
        "name": "PUBG Mobile Indonesia",
        "brand": "Garena",
        "slug": "pubg",
        "image": "https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
    },
    {
        "name": "Mobile Legend Indonesia",
        "brand": "Moonton",
        "slug": "mobile-legend",
        "image": "https://cdn.topupkuy.id/category/b7dad5cf-f304-40ca-b139-db6eb4f79654.webp"
    },
    {
        "name": "PUBG Mobile Indonesia",
        "brand": "Garena",
        "slug": "pubg",
        "image": "https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp"
    },
]

const Catalog = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <Category />
            <div className="max-w-[700px] gap-2 grid grid-cols-2 sm:grid-cols-12 grid-rows-auto sm:grid-rows-1 px-8 mt-2">
                {
                    items.map((item, i) => {
                        return (
                            <Card className="sm:col-span-4 sm:hover:-translate-y-2">
                                <Link href={route('customer.detail', { slug: item.slug })}>
                                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                        <p className="text-tiny text-white/60 uppercase font-bold">{item.brand}</p>
                                        <h4 className="text-white font-medium text-large">{item.name}</h4>
                                    </CardHeader>
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="z-0 w-full h-full object-cover"
                                        src={item.image}
                                    />
                                </Link>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog
