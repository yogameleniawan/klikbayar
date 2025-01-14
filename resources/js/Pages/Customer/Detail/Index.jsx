import FormSection from '@/Components/Customer/Components/FormSection';
import CustomerLayout from '@/Layouts/CustomerLayout'
import { Head } from '@inertiajs/react'
import { Image } from '@nextui-org/react'
import React, { useState } from 'react'

const products = [
    {
        id: 1,
        product: "24 Diamond",
        price: "Rp. 12.000",
        selected: false,
    },
    {
        id: 2,
        product: "36 Diamond",
        price: "Rp. 18.000",
        selected: true,
    },
    {
        id: 3,
        product: "50 Diamond",
        price: "Rp. 20.000",
        selected: false,
    },
    {
        id: 4,
        product: "50 Diamond",
        price: "Rp. 20.000",
        selected: false,
    },
    {
        id: 5,
        product: "50 Diamond",
        price: "Rp. 20.000",
        selected: false,
    }
]

const ItemProduct = ({
    id,
    name,
    price,
    selected,
    onClick
}) => {
    return (
        <div onClick={() => onClick(id)} className={`flex items-center gap-2 ${selected ? 'bg-gradient-to-r from-cyan-300 to-blue-500 animate-bell' : 'bg-default-500/20 translate-y-0 hover:-translate-y-2 transition-all'} rounded-3xl cursor-pointer justify-between`}>
            <div className="flex flex-col text-black dark:text-white py-2 px-4 text-center">
                <h4 className="text-[14px] text-nowrap font-bold">{name}</h4>
                <span className="text-[12px]">{price}</span>
            </div>
        </div>
    )
}

const Index = () => {

    const [items, setItems] = useState(products);

    const handleCategoryClick = (clickedId) => {
        setItems(prevItems =>
            prevItems.map(item => ({
                ...item,
                selected: item.id === clickedId
            }))
        );
    };

    return (
        <CustomerLayout>
            <Head title="Beranda" />
            <div className="flex flex-col items-center gap-8">
                <div
                    className="w-full h-[200px] sm:h-[300px] bg-cover bg-center blur-sm"
                    style={{
                        backgroundImage: "url('https://storage.googleapis.com/fastwork-static/c87afb55-35d7-4197-b18a-99811ca4f718.jpg')"
                    }}
                />

                <Image src='https://cdn.topupkuy.id/category/5e7e78a7-674e-4b81-b68b-f09ff0880555.webp' className="w-24 h-24 sm:w-40 sm:h-40 object-cover -my-20 sm:-my-28" />

                <div className="flex mt-0 sm:mt-10 gap-8">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-bold">Garena</h1>
                        <h1>PUBG Mobile Indonesia</h1>
                    </div>
                    <div className="bg-default-100 p-4 rounded-3xl text-center">
                        <div class="flex flex-col items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-warning-500 iconify iconify--solar" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path></svg>
                            <span class="text-3xl font-semibold">4.4</span>
                            <span class="text-[12px] text-default-500">(139 reviews)</span>
                        </div>
                    </div>
                </div>


                <FormSection title={"Pilih Produk"} number={"1"}>
                    <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 grid-rows-auto sm:grid-rows-1 px-8 mt-6">
                        {
                            items.map((item, i) => {
                                return (
                                    <ItemProduct id={item.id} name={item.product} price={item.price} selected={item.selected} onClick={handleCategoryClick} />
                                )
                            })
                        }
                    </div>
                </FormSection>
            </div>
        </CustomerLayout>
    )
}

export default Index
