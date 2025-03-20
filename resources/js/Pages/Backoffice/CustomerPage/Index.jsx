import AlertMessage from '@/Components/Alert/AlertMessage'
import FileImageUploadForm from '@/Components/Form/FileImageUploadForm'
import BackofficeLayout from '@/Layouts/BackofficeLayout'
import { Head, useForm } from '@inertiajs/react'
import { BreadcrumbItem, Breadcrumbs, Button, Form, Select, SelectItem } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import FilePreview from '@/Components/FilePreview'
import ProductPreview from '@/Components/ProductPreview'
import { Award, PackageX, ShoppingBag } from 'lucide-react'

const ProductCategorySection = ({ title, products, iconComponent, url }) => {
    const [localProducts, setLocalProducts] = useState([]);

    useEffect(() => {
        setLocalProducts(products || []);
    }, [products]);

    const handleProductDelete = (deletedId) => {
        setLocalProducts(prevProducts =>
            prevProducts.filter(item => item.id !== deletedId)
        );

        if (onProductDelete) {
            onProductDelete(deletedId);
        }
    };

    return (
        <div className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-1">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                {iconComponent}
                <h3 className="font-medium text-gray-800 dark:text-gray-100">{title}</h3>
            </div>

            {localProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3">
                    {localProducts.map((item, i) => (
                        <ProductPreview
                            key={i}
                            id={item.id}
                            file={item.product.image}
                            url={url}
                            onDelete={handleProductDelete}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-md text-gray-500">
                    <PackageX size={36} className="mb-2 text-gray-400" />
                    <p className="text-sm">No products selected</p>
                </div>
            )}
        </div>
    );
};

const ProductDisplay = ({ product_promos, product_best }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <ProductCategorySection
                title="Product Promotions"
                products={product_promos}
                iconComponent={<ShoppingBag size={18} className="text-purple-600" />}
                url="backoffice.customer-page.delete-product"
            />

            <ProductCategorySection
                title="Best of The Blast"
                products={product_best}
                iconComponent={<Award size={18} className="text-amber-500" />}
                url="backoffice.customer-page.delete-product"
            />
        </div>
    );
};


const Index = ({ banners, products, product_promos, product_best }) => {
    const { data, setData, post, processing, reset } = useForm({
        image: [],
        product_id: '',
        type: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('backoffice.customer-page.store'), {
            onFinish: () => reset(['image', 'product_id', 'type']),
        });
    };

    return (
        <BackofficeLayout>
            <Head title="Customer Page" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Customer Page</BreadcrumbItem>
            </Breadcrumbs>

            <AlertMessage />
            <Form className="flex flex-col gap-3" onSubmit={submit} encType='multipart/form-data'>
                <FileImageUploadForm
                    className={"w-full"}
                    data={data}
                    setData={setData}
                    processing={processing}
                    multiple />
                {
                    banners.map((item, i) => {
                        return (
                            <FilePreview key={i} file={item.file} url={"backoffice.customer-page.destroy"} />
                        )
                    })
                }

                <Select
                    label="Category"
                    labelPlacement="outside"
                    placeholder="Select a Category"
                    name="type"
                    onChange={(e) => {
                        setData('type', e.target.value)
                    }}
                >
                    <SelectItem key={'promo'} textValue={'Promo'} value={'Promo'}>
                        <span className="text-small">Promo</span>
                    </SelectItem>
                    <SelectItem key={'best'} textValue={'Best of The Blast'} value={'Best of The Blast'}>
                        <span className="text-small">Best of The Blast</span>
                    </SelectItem>
                </Select>

                <div className="flex flex-row gap-2 w-full">
                    <Select
                        label="Product"
                        labelPlacement="outside"
                        placeholder="Select a Product"
                        name="product_id"
                        onChange={(e) => {
                            setData('product_id', e.target.value)
                        }}
                    >
                        {
                            products.map((item, i) => (
                                <SelectItem key={item.id} textValue={item.name} value={item.name}>
                                    <span className="text-small">{item.name}</span>
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>

                <ProductDisplay product_promos={product_promos} product_best={product_best} />

                <Button className="w-full" color="primary" type="submit" isLoading={processing} isDisabled={processing}>
                    Add
                </Button>
            </Form>
        </BackofficeLayout>
    )
}

export default Index
