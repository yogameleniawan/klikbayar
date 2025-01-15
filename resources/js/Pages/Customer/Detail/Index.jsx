import FormSection from '@/Components/Customer/Components/FormSection';
import CustomerLayout from '@/Layouts/CustomerLayout'
import { Head } from '@inertiajs/react'
import { Button, Form, Image, Input, Progress } from '@nextui-org/react'
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

                <div className="flex flex-col mt-0 sm:mt-10 gap-8">
                    <div className="flex flex-col justify-center text-center">
                        <h1 className="font-bold text-2xl">Garena</h1>
                        <h1>PUBG Mobile Indonesia</h1>
                    </div>
                    <div className="flex flex-col gap-2 bg-default-100 p-4 rounded-3xl text-center">
                        <div className="flex flex-col items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-warning-500 iconify iconify--solar" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path></svg>
                            <span className="text-3xl font-semibold">4.4</span>
                            <span className="text-[12px] text-default-500">(139 reviews)</span>
                        </div>
                        <button className="z-0 group relative inline-flex items-center justify-center box-border font-normal border-medium px-4 min-w-20 h-10 text-small gap-2 rounded-full w-full bg-transparent border-default" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" focusable="false" tabindex="-1" className="iconify iconify--solar" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z"></path>
                            </svg>
                            Tulis Review
                        </button>
                    </div>
                </div>


                <FormSection title={"Pilih Produk"} number={"1"}>
                    <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 grid-rows-auto sm:grid-rows-1 px-8 mt-6">
                        {
                            items.map((item, i) => {
                                return (
                                    <ItemProduct id={item.id} name={item.product} price={item.price} selected={item.selected} onClick={handleCategoryClick} />
                                )
                            })
                        }
                    </div>
                </FormSection>

                <FormSection title={"Lengkapi Informasi Berikut"} number={"2"}>
                    <Form className="flex flex-col gap-3 p-4 w-full" onSubmit={() => { }}>
                        <Input
                            isRequired
                            label="ID Garena"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                        />
                    </Form>
                </FormSection>

                <FormSection title={"Kontak yang dapat dihubungi"} number={"3"}>
                    <Form className="flex flex-col gap-3 p-4 w-full" onSubmit={() => { }}>
                        <Input
                            isRequired
                            label="Nomor Whatsapp"
                            name="email"
                            placeholder="Nomor whatsapp aktif, contoh: 62812345xxxx"
                            type="text"
                            variant="bordered"
                            description="Kami akan menghubungi kontak ini, apabila terjadi sesuatu hal."
                        />
                    </Form>
                </FormSection>

                <FormSection title={"Pilih Metode Pembayaran"} number={"4"}>
                    <Form className="flex flex-col gap-3 p-4 w-full" onSubmit={() => { }}>
                        <Input
                            isRequired
                            label="Nomor Whatsapp"
                            name="email"
                            placeholder="Nomor whatsapp aktif, contoh: 62812345xxxx"
                            type="text"
                            variant="bordered"
                            description="Kami akan menghubungi kontak ini, apabila terjadi sesuatu hal."
                        />
                    </Form>
                </FormSection>

                <div className="fixed bottom-0 left-0 z-[99] flex w-full flex-col gap-4 rounded-t-3xl sm:rounded-3xl bg-default-100 px-4 py-4 md:bottom-4 md:left-auto md:flex-row md:items-center md:justify-between md:rounded-xl md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex gap-2 text-xs font-bold text-opacity-30 md:text-sm">
                            <span className="leading-4 line-through">Rp&nbsp;73.077</span>
                            <span className="flex items-center rounded-lg bg-gradient-to-r from-cyan-300 to-blue-500 px-2 py-1 text-xs leading-none ">9%</span>
                        </div>
                        <div className="text-2xl font-bold leading-9 text-blue-500">Rp&nbsp;66.500</div>
                        <div className="text-xs font-semibold leading-6 md:text-sm">-, 275 Diamonds, -</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Langkah : 3/4</span>
                        <Progress aria-label="Progress" className="max-w-md" value={60} />
                        <button type="submit" className="flex cursor-pointer bg-gradient-to-r from-cyan-300 to-blue-500 p-3 justify-center text-default-100 font-bold rounded-full w-full disabled:cursor-not-allowed disabled:brightness-75" disabled="disabled">
                            Klik Bayar</button>
                        <div className="text-xs md:text-[10px] w-80 text-center sm:text-right mt-2">Pastikan pesanan sudah sesuai, jika sudah sesuai maka Anda bisa melanjutkan proses pembelian dengan tombol Klik Bayar.</div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    )
}

export default Index
