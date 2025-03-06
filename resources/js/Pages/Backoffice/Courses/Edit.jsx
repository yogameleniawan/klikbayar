import React from "react";
import { Form, Input, Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";

export default function Edit({ user }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const { errors } = usePage().props;

    return (
        <BackofficeLayout>
            <Head title="Edit Course"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('users.index')) }}>Users</BreadcrumbItem>
                <BreadcrumbItem>Edit</BreadcrumbItem>
            </Breadcrumbs>
            <AlertMessage />
            <Form
                className="w-full max-w-xs flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);

                    router.put(
                        route('users.update', { id: user.id }),
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
                    errorMessage={errors.name || "Please enter a valid name"}
                    isInvalid={errors.name}
                    label="Name"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    defaultValue={user.name}
                />

                <Input
                    isRequired
                    errorMessage={errors.email || "Please enter a valid email"}
                    isInvalid={errors.email}
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    defaultValue={user.email}
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

