import React from "react";
import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Alert } from "@heroui/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";

export default function Add() {
    const [isLoading, setIsLoading] = React.useState(false);

    const { errors } = usePage().props;

    return (
        <BackofficeLayout>
            <Head title="Add User"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.users.index')) }}>Users</BreadcrumbItem>
                <BreadcrumbItem>Add</BreadcrumbItem>
            </Breadcrumbs>
            <AlertMessage />
            <Form
                className="w-full flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);

                    router.post(
                        route('users.store'),
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
                    placeholder="Enter your name"
                    type="text"
                    errorMessage={errors.name || "Please enter a valid name"}
                    isInvalid={errors.name}
                />

                <Input
                    isRequired
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    errorMessage={errors.email || "Please enter a valid email"}
                    isInvalid={errors.email}
                />

                <Input
                    isRequired
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    errorMessage={errors.password || "Please enter a valid password"}
                    isInvalid={errors.password}
                />
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

