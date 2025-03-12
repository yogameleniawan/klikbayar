import { Link } from '@inertiajs/react'
import { Card, CardHeader, Image, Spinner } from '@nextui-org/react'
import React from 'react'
import Category from './Components/Category'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCategoryCatalogStore } from '@/store/useCategoryCatalogStore'
import { DeletedFolder } from '../Icons/Icon'

const Catalog = () => {

    const categoryStore = useCategoryCatalogStore();

    const { isLoading, data } = useQuery({
        queryKey: ["data-products", categoryStore.category],
        queryFn: async () => {
            const res = await axios.get(route('api.product.get', {
                'category': categoryStore.category
            }));

            const data = res.data;

            return data;
        },
    })

    const EmptyCatalog = () => {
        return (
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-4xl font-semibold"><DeletedFolder size={40} /></h3>
                <span className="text-center text-sm">
                    Belum ada produk yang tersedia
                </span>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center gap-3">
            <Category />
            {
                isLoading && <Spinner />
            }
            {
                data && (data.length == 0 ? <EmptyCatalog /> : (
                    <div className="max-w-[500px] sm:max-w-[700px] gap-2 grid grid-cols-3 sm:grid-cols-12 grid-rows-auto sm:grid-rows-1 px-8 mt-2">
                        {
                            data.map((item, i) => {
                                return (
                                    <Card key={i} className="col-span-1 sm:col-span-4 sm:hover:-translate-y-2">
                                        <Link href={route('customer.checkout', { slug: item.slug })}>
                                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">{item.brand}</p>
                                                <h4 className="text-white font-medium text-large">{item.name}</h4>
                                            </CardHeader>
                                            <Image
                                                removeWrapper
                                                alt="Card background"
                                                className="z-0 w-full h-full object-cover"
                                                src={route('stream', {
                                                    path: item.image
                                                })}
                                            />
                                        </Link>
                                    </Card>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Catalog
