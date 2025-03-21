import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem, Switch } from "@heroui/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";

import React from 'react';
import TextEditor from "@/Components/Editor/TextEditor";

export default function Add() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        code: "",
        description: "",
        category: "",
        enabled: true,
        image: ""
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route('backoffice.payment-methods.store'),
            data,
            {
                onFinish: () => { }
            }
        );
    };

    return (
        <BackofficeLayout>
            <Head title="Add Payment Method"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.payment-methods.index')) }}>Payment Methods</BreadcrumbItem>
                <BreadcrumbItem>Add</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-2">
                <div onClick={() => { router.visit(route('backoffice.payment-methods.index')) }} className="cursor-pointer">
                    <IoChevronBackCircleSharp size={25} />
                </div>
                <span>Add Payment Method</span>
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
                    placeholder="Enter name"
                    type="text"
                    errorMessage={errors.name || "Please enter a valid name"}
                    isInvalid={errors.name}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <TextEditor onChange={(content) => setData('description', content)} />

                <Input
                    isRequired
                    label="Code"
                    labelPlacement="outside"
                    name="code"
                    placeholder="Enter code"
                    type="text"
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

                <Switch name="enabled" size="sm" defaultSelected onValueChange={(isSelected) => setData('enabled', isSelected)}>Active</Switch>

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

