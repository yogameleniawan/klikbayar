import FormSection from '@/Components/Customer/Components/FormSection';
import { Star } from '@/Components/Icons/Icon';
import CustomerLayout from '@/Layouts/CustomerLayout'
import { formatRupiah } from '@/utils/format_rupiah';
import { Head } from '@inertiajs/react'
import { Chip, Form, Image, Input, Progress } from '@nextui-org/react'
import React, { useState } from 'react'

const ItemProduct = ({
    id,
    name,
    price,
    discount,
    margin,
    selected,
    onClick
}) => {

    const priceWithMargin = (price, margin) => {
        return (price * (margin / 100)) + price;
    };

    const priceWithDiscount = (price, discount) => {
        return price - (price * (discount / 100));
    };

    return (
        <div
            onClick={() => onClick(id)}
            className={`flex items-center gap-2 bg-default-400/20 translate-y-0 hover:-translate-y-2 hover:border-2 border-blue-500 transition-all rounded-xl cursor-pointer justify-between relative ${selected ? 'border-3 border-blue-500' : ''}`}
            style={{ backgroundImage: `url("/assets/bg.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className={`flex flex-col text-white w-full gap-2 rounded-lg bg-black/10`}>
                <h4 className={`text-md text-nowrap font-bold ${selected ? 'bg-blue-500 p-2 rounded-t-md' : 'border-b-1 border-gray-500 p-2 rounded-t-xl'}`}>{name}</h4>
                {
                    discount > 0 ? (
                        <div className="flex flex-col gap-2 p-2">
                            <div className="flex items-center gap-2">
                                <Chip className="text-[10px] bg-orange-500 text-white">{discount}%</Chip>
                                <span className="text-md">{formatRupiah(priceWithDiscount(priceWithMargin(price, margin), discount))}</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-[10px]">Harga asli</span>
                                <span className="text-[10px] line-through">{formatRupiah(priceWithMargin(price, margin))}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2 p-2">
                            <span className="text-lg">{formatRupiah(priceWithMargin(price, margin))}</span>
                            <span className="text-xs text-orange-500">Harga terbaik</span>
                        </div>
                    )
                }
            </div>
            {
                discount > 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-8 h-8 text-orange-500 flame-animation absolute right-0 -top-3">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                    </svg>
                )
            }
        </div>
    );
};

const Index = ({ product }) => {
    console.log({ product })
    const [items, setItems] = useState(product.detail);

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
                        backgroundImage: `url(${route('stream', {
                            path: product.banner.path
                        })})`
                    }}
                />

                <Image src={route('stream', {
                    path: product.image.path
                })} className="w-24 h-24 sm:w-40 sm:h-40 object-cover -my-20 sm:-my-28" />

                <div className="flex flex-col mt-0 sm:mt-8 gap-8">
                    <div className="flex flex-col justify-center text-center">
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-2 items-center">
                                <span className="text-xl font-semibold">4.4</span>
                                <Star />
                            </div>
                            <span className="text-[12px] text-default-500">(139 reviews)</span>
                        </div>
                        <h1 className="font-bold text-2xl">{product.name}</h1>
                        <h1>{product.brand}</h1>
                        <p className="text-xs px-40">{product.description}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 w-full px-10">
                    <div className="w-full md:w-2/3">
                        <FormSection title={"Pilih Produk"} number={"1"}>
                            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 grid-rows-auto px-8 mt-6 w-full">
                                {
                                    items.map((item, i) => {
                                        return (
                                            <ItemProduct
                                                key={i}
                                                id={item.id}
                                                name={item.digiflazz.product_name}
                                                price={item.digiflazz.price}
                                                discount={item.discount}
                                                margin={item.margin}
                                                selected={item.selected}
                                                onClick={handleCategoryClick}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </FormSection>
                    </div>

                    <div className="flex flex-col w-full md:w-1/3 gap-8">
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
                                    placeholder="contoh: 62812345xxxx"
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
                    </div>
                </div>

                <div className="hidden fixed bottom-0 left-0 z-[99] flex w-full flex-col gap-4 rounded-t-3xl sm:rounded-3xl bg-default-100 px-4 py-4 md:bottom-4 md:left-auto md:flex-row md:items-center md:justify-between md:rounded-xl md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex gap-2 text-xs font-bold text-opacity-30 md:text-sm">
                            <span className="leading-4 line-through">Rp&nbsp;73.077</span>
                            <span className="flex items-center rounded-lg bg-blue-500 px-2 py-1 text-xs leading-none ">9%</span>
                        </div>
                        <div className="text-2xl font-bold leading-9 text-blue-500">Rp&nbsp;66.500</div>
                        <div className="text-xs font-semibold leading-6 md:text-sm">-, 275 Diamonds, -</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span>Langkah</span>
                            <span className="text-default-400">3/4</span>
                        </div>
                        <Progress aria-label="Progress" className="max-w-md" value={60} />
                        <button type="submit" className="flex cursor-pointer bg-blue-500 p-3 justify-center text-default-100 font-bold rounded-full w-full disabled:cursor-not-allowed disabled:brightness-75" disabled="disabled">
                            Klik Bayar</button>
                        <div className="text-xs md:text-[10px] w-80 text-center sm:text-right mt-2">Pastikan pesanan sudah sesuai, jika sudah sesuai maka Anda bisa melanjutkan proses pembelian dengan tombol Klik Bayar.</div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    )
}

export default Index
