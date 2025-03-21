import React from 'react'
import { Link } from '@inertiajs/react'
import { addToast, Card, CardHeader, Image, Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCategoryCatalogStore } from '@/store/useCategoryCatalogStore'
import { DeletedFolder } from '../Icons/Icon'
import Category from './Components/Category'

const Catalog = () => {
    const { category } = useCategoryCatalogStore();

    const { isLoading, data } = useQuery({
        queryKey: ["data-products", category],
        queryFn: async () => {
            try {
                const response = await axios.get(route('api.product.get', { category }));
                return response.data;
            } catch (error) {
                if (error.response?.status === 429) {
                    addToast({
                        title: "Terlalu Banyak Request",
                        description: "Mohon tunggu beberapa saat sebelum mencoba kembali",
                        color: "warning"
                    });
                }
                throw error;
            }
        },
        onError: (error) => {
            if (error.response?.status !== 429) {
                addToast({
                    title: "Error",
                    description: "Gagal mengambil data produk",
                    color: "danger"
                });
            }
        }
    });

    const renderProductCards = () => {
        if (isLoading) return <Spinner />;

        if (!data || data.length === 0) {
            return (
                <div className="flex flex-col items-center gap-2 py-8">
                    <DeletedFolder size={40} />
                    <span className="text-center text-sm">
                        Belum ada produk yang tersedia
                    </span>
                </div>
            );
        }

        const groupedByCategory = data.reduce((groups, item) => {
            const group = (groups[item.category] || []);
            group.push(item);
            groups[item.category] = group;
            return groups;
        }, {});

        return (
            <div className="w-full space-y-8 px-4 mt-4">
                {Object.entries(groupedByCategory).map(([category, products]) => (
                    <div key={category} className="space-y-4">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-bold">{category}</h2>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        <div className="max-w-[350px] sm:max-w-[500px] gap-2 grid grid-cols-3 sm:grid-cols-12 grid-rows-auto sm:grid-rows-1">
                            {products.map((item, i) => (
                                <Card key={i} className="col-span-1 sm:col-span-4 transition-transform duration-300 sm:hover:-translate-y-2">
                                    <Link href={route('customer.checkout', { slug: item.slug })}>
                                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                            <p className="text-xs sm:text-tiny text-white/60 uppercase font-bold">{item.brand}</p>
                                            <h4 className="text-white font-medium text-xs sm:text-tiny truncate max-w-full">{item.name}</h4>
                                        </CardHeader>
                                        <Image
                                            removeWrapper
                                            alt={item.name}
                                            className="z-0 w-full h-full object-cover"
                                            src={route('stream', { path: item.image })}
                                        />
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center gap-3">
            <Category />
            {renderProductCards()}
        </div>
    );
};

export default Catalog;
