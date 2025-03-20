import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem, Textarea } from "@heroui/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import FileImageUploadForm from "@/Components/Form/FileImageUploadForm";

import React from 'react';
import FilePreview from "@/Components/FilePreview";
import TextEditor from "@/Components/Editor/TextEditor";

export default function Edit({ data: payment_method, logo }) {

    const { data, setData, post, processing, errors } = useForm({
        name: payment_method.name,
        code: payment_method.code,
        description: payment_method.description,
        category: payment_method.category,
        image: "",
        _method: 'PUT'
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route('backoffice.payment-methods.update', {
                id: payment_method.id
            }),
            data,
            {
                onFinish: () => { }
            }
        );
    };

    return (
        <BackofficeLayout>
            <Head title="Edit Payment Method"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.payment-methods.index')) }}>Payment Methods</BreadcrumbItem>
                <BreadcrumbItem>Edit</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-2">
                <div onClick={() => { router.visit(route('backoffice.payment-methods.index')) }} className="cursor-pointer">
                    <IoChevronBackCircleSharp size={25} />
                </div>
                <span>Edit Payment Method</span>
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
                    placeholder="Enter name"
                    type="text"
                    errorMessage={errors.name || "Please enter a valid name"}
                    isInvalid={errors.name}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <TextEditor onChange={(content) => setData('description', content)} defaultValue={data.description} />

                <Input
                    isRequired
                    label="Code"
                    labelPlacement="outside"
                    name="code"
                    placeholder="Enter code"
                    type="text"
                    defaultValue={data.code}
                    errorMessage={errors.code || "Please enter a valid code"}
                    isInvalid={errors.code}
                    onChange={(e) => setData('code', e.target.value)}
                />

                <Select
                    label="Category"
                    labelPlacement="outside"
                    placeholder="Select a Category"
                    name="category"
                    onChange={(e) => {
                        setData('category', e.target.value)
                    }}
                    defaultSelectedKeys={new Set([data.category])}
                >
                    <SelectItem key={'Bank'} textValue={'Bank'} value={'Bank'}>
                        <span className="text-small">Bank</span>
                    </SelectItem>
                    <SelectItem key={'E-Wallet'} textValue={'E-Wallet'} value={'E-Wallet'}>
                        <span className="text-small">E-Wallet</span>
                    </SelectItem>
                    <SelectItem key={'Virtual Account'} textValue={'Virtual Account'} value={'Virtual Account'}>
                        <span className="text-small">Virtual Account</span>
                    </SelectItem>
                    <SelectItem key={'Retail'} textValue={'Retail'} value={'Retail'}>
                        <span className="text-small">Retail</span>
                    </SelectItem>
                </Select>

                <div className="flex flex-row gap-2 w-full">
                    <Select
                        label="Logo"
                        labelPlacement="outside"
                        placeholder="Select a Logo"
                        name="image"
                        onChange={(e) => {
                            setData('image', e.target.value)
                        }}
                        defaultSelectedKeys={new Set([payment_method.image])}
                    >
                        {
                            logo.map((item, i) => (
                                <SelectItem key={item.name} textValue={item.name} value={item.name}>
                                    <span className="text-small">{item.name}</span>
                                </SelectItem>
                            ))
                        }
                    </Select>
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

