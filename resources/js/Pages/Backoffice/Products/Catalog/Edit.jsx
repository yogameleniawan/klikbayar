import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem, Textarea } from "@nextui-org/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import FileImageUploadForm from "@/Components/Form/FileImageUploadForm";

import React from 'react';
import FilePreview from "@/Components/FilePreview";
import DynamicProductsForm from "@/Components/Form/DynamicProductsForm";
import DynamicInputForm from "@/Components/Form/DynamicInputForm";

export default function Edit({ data: product_edit }) {
    const { categories, digiflazz_products, product_details } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: product_edit.name,
        description: product_edit.description,
        brand: product_edit.brand,
        product_category_id: product_edit.category_name,
        products: product_details,
        inputs: JSON.parse(product_edit.input),
        image: [],
        banner: []
    });

    const submit = (e) => {
        e.preventDefault();

        put(
            route('backoffice.products.catalog.update', {
                id: product_edit.id
            }),
            data,
            {
                onFinish: () => { }
            }
        );
    };

    return (
        <BackofficeLayout>
            <Head title="Edit Product"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.catalog.index')) }}>Catalog</BreadcrumbItem>
                <BreadcrumbItem>Edit</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-2">
                <div onClick={() => { router.visit(route('backoffice.products.catalog.index')) }} className="cursor-pointer">
                    <IoChevronBackCircleSharp size={25} />
                </div>
                <span>Edit Catalog</span>
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
                    defaultValue={data.name}
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
                    defaultValue={data.description}
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
                    defaultValue={data.brand}
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
                    defaultSelectedKeys={new Set([data.product_category_id])}
                    onChange={(e) => {
                        setData('product_category_id', e.target.value)
                    }}
                >
                    {(category) => (
                        <SelectItem key={category.name} textValue={category.name} value={category.name}>
                            <span className="text-small">{category.name}</span>
                        </SelectItem>
                    )}
                </Select>

                <DynamicInputForm
                    data={data}
                    setData={setData}
                    processing={processing}
                    errors={errors}
                />

                <DynamicProductsForm
                    data={data}
                    setData={setData}
                    processing={processing}
                    errors={errors}
                    digiflazz_products={digiflazz_products}
                />

                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col gap-2">
                        <FileImageUploadForm
                            className="w-96"
                            name="image"
                            data={data}
                            setData={setData}
                            processing={processing} />
                        <FilePreview file={product_edit.image} />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <FileImageUploadForm
                            className="w-full"
                            name="banner"
                            data={data}
                            setData={setData}
                            processing={processing} />
                        <FilePreview file={product_edit.banner} />
                    </div>
                </div>

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

