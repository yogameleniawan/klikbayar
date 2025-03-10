import React from "react";
import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem } from "@nextui-org/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
export default function Add() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        product_category_id: '',
        banner_id: '',
        image_id: '',
    });

    const { categories, digiflazz_products } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

        post(
            route('backoffice.products.catalog.store'),
            data,
            {
                onFinish: () => {}
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

                <Select
                    items={digiflazz_products.filter((item) => item.category === data.product_category_id)}
                    label="Digiflazz Product"
                    labelPlacement="outside"
                    placeholder="Select a Category"
                    name="category_id"
                >
                    {(item) => (
                        <SelectItem key={item.id} textValue={item.product_name} value={item.product_name}>
                            <span className="text-small">{item.product_name}</span>
                        </SelectItem>
                    )}
                </Select>

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

