import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem, Card, CardBody, Textarea } from "@nextui-org/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import FileImageUploadForm from "@/Components/Form/FileImageUploadForm";

import React, { useState } from 'react';
import { PlusIcon, XCircleIcon } from 'lucide-react';

const DynamicProductsForm = ({
    data,
    setData,
    processing,
    errors,
    digiflazz_products
}) => {
    const [productItems, setProductItems] = useState(data.products || []);

    const handleAddProduct = () => {
        const newProducts = [...productItems, { digi_product: "", margin: "" }];
        setProductItems(newProducts);
        setData('products', newProducts);
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = productItems.filter((_, i) => i !== index);
        setProductItems(updatedProducts);
        setData('products', updatedProducts);
    };

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...productItems];
        updatedProducts[index][field] = value;
        setProductItems(updatedProducts);
        setData('products', updatedProducts);
    };

    if (productItems.length === 0) {
        handleAddProduct();
    }

    return (
        <Card className="w-full">
            <CardBody className="flex flex-col gap-4">
                {productItems.map((product, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-row items-center">
                            <h4 className="text-small font-medium">Product {index + 1}</h4>
                            {index > 0 && (
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="light"
                                    className="ml-2"
                                    onPress={() => handleRemoveProduct(index)}
                                >
                                    <XCircleIcon size={16} />
                                </Button>
                            )}
                        </div>
                        <div className="flex flex-row gap-2">
                            <Select
                                items={digiflazz_products.filter((item) => item.category === data.product_category_id)}
                                label="Digiflazz Product"
                                labelPlacement="outside"
                                placeholder="Select a Digiflazz Product"
                                selectedKeys={product.digi_product ? [product.digi_product] : []}
                                onChange={(e) => handleProductChange(index, "digi_product", e.target.value)}
                            >
                                {(item) => (
                                    <SelectItem key={item.id} textValue={item.product_name} value={item.product_name}>
                                        <span className="text-small">{item.product_name}</span>
                                    </SelectItem>
                                )}
                            </Select>
                            <Input
                                isRequired
                                label="Margin"
                                labelPlacement="outside"
                                placeholder="Enter margin (%) percent"
                                type="number"
                                value={product.margin}
                                errorMessage={errors[`products.${index}.margin`] || "Please enter a valid margin"}
                                isInvalid={errors[`products.${index}.margin`]}
                                onChange={(e) => handleProductChange(index, "margin", e.target.value)}
                            />
                        </div>
                    </div>
                ))}

                <div className="flex flex-row gap-2 mt-2">
                    <Button
                        variant="flat"
                        startContent={<PlusIcon size={16} />}
                        onPress={handleAddProduct}
                        disabled={processing}
                    >
                        Add Another Product
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default function Add() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        brand: "",
        product_category_id: "",
        products: [],
        image: [],
        banner: []
    });

    const { categories, digiflazz_products } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

        post(
            route('backoffice.products.catalog.store'),
            data,
            {
                onFinish: () => { }
            }
        );
    };

    return (
        <BackofficeLayout>
            <Head title="Add User"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.catalog.index')) }}>Catalog</BreadcrumbItem>
                <BreadcrumbItem>Add</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-2">
                <div onClick={() => { router.visit(route('backoffice.products.catalog.index')) }} className="cursor-pointer">
                    <IoChevronBackCircleSharp size={25} />
                </div>
                <span>Add Catalog</span>
            </div>
            <AlertMessage />
            <Form
                className="w-full flex flex-col gap-4"
                onSubmit={submit}
            >
                <Input
                    isRequired
                    label="Name"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Enter category name"
                    type="text"
                    errorMessage={errors.name || "Please enter a valid name"}
                    isInvalid={errors.name}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <Textarea
                    isRequired
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter description"
                    errorMessage={errors.description || "Please enter a valid description"}
                    isInvalid={errors.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <Input
                    isRequired
                    label="Brand"
                    labelPlacement="outside"
                    name="brand"
                    placeholder="Enter category brand"
                    type="text"
                    errorMessage={errors.brand || "Please enter a valid brand"}
                    isInvalid={errors.brand}
                    onChange={(e) => setData('brand', e.target.value)}
                />

                <Select
                    items={categories}
                    label="Category"
                    labelPlacement="outside"
                    placeholder="Select a Category"
                    name="product_category_id"
                    onChange={(e) => {
                        console.log(e.target.value)
                        setData('product_category_id', e.target.value)
                    }}
                >
                    {(category) => (
                        <SelectItem key={category.name} textValue={category.name} value={category.name}>
                            <span className="text-small">{category.name}</span>
                        </SelectItem>
                    )}
                </Select>

                <DynamicProductsForm
                    data={data}
                    setData={setData}
                    processing={processing}
                    errors={errors}
                    digiflazz_products={digiflazz_products}
                />

                <FileImageUploadForm
                    name="image"
                    data={data}
                    setData={setData}
                    processing={processing} />

                <FileImageUploadForm
                    name="banner"
                    data={data}
                    setData={setData}
                    processing={processing} />

                <div className="flex gap-2">
                    <Button color="primary" type="submit" isLoading={processing}>
                        Submit
                    </Button>
                    <Button type="reset" variant="flat">
                        Reset
                    </Button>
                </div>
            </Form>
        </BackofficeLayout>
    );
}

