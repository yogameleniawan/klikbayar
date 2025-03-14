import React from "react";
import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Select, SelectItem } from "@heroui/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IconLists } from "@/Components/Icons/Icon";

export default function Edit({ data }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const { errors } = usePage().props;

    return (
        <BackofficeLayout>
            <Head title="Edit Categories"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.categories.index')) }}>Categories</BreadcrumbItem>
                <BreadcrumbItem>Edit</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-2">
                <div onClick={() => { router.visit(route('backoffice.products.categories.index')) }} className="cursor-pointer">
                    <IoChevronBackCircleSharp size={25} />
                </div>
                <span>Edit Categories</span>
            </div>
            <AlertMessage />
            <Form
                className="w-full flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    const form = Object.fromEntries(formData);

                    router.put(
                        route('backoffice.products.categories.update', { id: data.id }),
                        form,
                        {
                            onStart: () => setIsLoading(true),
                            onFinish: () => setIsLoading(false)
                        }
                    );
                }}
            >
                <Input
                    isRequired
                    errorMessage={errors.name || "Please enter a valid name"}
                    isInvalid={errors.name}
                    label="Name"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    defaultValue={data.name}
                />

                <Select
                    items={IconLists}
                    label="Icon"
                    labelPlacement="outside"
                    placeholder="Select a Icon"
                    name="icon"
                    defaultSelectedKeys={new Set([data.icon])}
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

