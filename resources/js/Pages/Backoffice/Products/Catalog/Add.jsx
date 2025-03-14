import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem, Textarea } from "@heroui/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import FileImageUploadForm from "@/Components/Form/FileImageUploadForm";

import React from 'react';
import DynamicProductsForm from "@/Components/Form/DynamicProductsForm";
import DynamicInputForm from "@/Components/Form/DynamicInputForm";

export default function Add() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        brand: "",
        product_category_id: "",
        products: [],
        inputs: [],
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
            <Head title="Add Product"></Head>
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
                    <FileImageUploadForm
                        className="w-96"
                        name="image"
                        data={data}
                        setData={setData}
                        processing={processing} />

                    <FileImageUploadForm
                        className="w-full"
                        name="banner"
                        data={data}
                        setData={setData}
                        processing={processing} />
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

