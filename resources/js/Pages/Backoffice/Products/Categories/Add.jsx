import React from "react";
import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem } from "@heroui/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { ActiveCall, Gamepad, IconLists, Iphone, Keyboard, Wallet } from "@/Components/Icons/Icon";

export default function Add() {
    const [isLoading, setIsLoading] = React.useState(false);

    const { errors } = usePage().props;

    return (
        <BackofficeLayout>
            <Head title="Add User"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.categories.index')) }}>Categories</BreadcrumbItem>
                <BreadcrumbItem>Add</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-2">
                <div onClick={() => { router.visit(route('backoffice.products.categories.index')) }} className="cursor-pointer">
                    <IoChevronBackCircleSharp size={25} />
                </div>
                <span>Add Categories</span>
            </div>
            <AlertMessage />
            <Form
                className="w-full flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);

                    router.post(
                        route('backoffice.products.categories.store'),
                        data,
                        {
                            onStart: () => setIsLoading(true),
                            onFinish: () => setIsLoading(false)
                        }
                    );
                }}
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
                />

                <Select
                    items={IconLists}
                    label="Icon"
                    labelPlacement="outside"
                    placeholder="Select a Icon"
                    name="icon"
                    renderValue={(items) => {
                        return items.map((item) => (
                            <div key={item.data.key} className="flex items-center gap-2">
                                {item.data.icon}
                                <span>{item.data.value}</span>
                            </div>
                        ));
                    }}
                >
                    {(item) => (
                        <SelectItem key={item.value} textValue={item.value} value={item.value}>
                            <div key={item.key} className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.value}</span>
                            </div>
                        </SelectItem>
                    )}
                </Select>

                <div className="flex gap-2">
                    <Button color="primary" type="submit" isLoading={isLoading}>
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

