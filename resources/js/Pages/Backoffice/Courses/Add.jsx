import React from "react";
import { Form, Input, Button, Breadcrumbs, BreadcrumbItem, Alert } from "@nextui-org/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";
import FileImageUploadForm from "@/Components/Form/FileImageUploadForm";
import { Editor, EditorProvider } from "react-simple-wysiwyg";

export default function Add() {
    const { data: formData, setData, processing } = useForm({
        image: [],
        description: "",
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const { errors } = usePage().props;

    return (
        <BackofficeLayout>
            <Head title="Add Course"></Head>
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('courses.index')) }}>Courses</BreadcrumbItem>
                <BreadcrumbItem>Add</BreadcrumbItem>
            </Breadcrumbs>
            <AlertMessage />
            <Form
                className="w-full flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    formData.append('thumbnail', formData.image[0]);
                    formData.append('description', formData.description[0]);
                    const data = Object.fromEntries(formData);

                    router.post(
                        route('courses.store'),
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
                    label="Title"
                    labelPlacement="outside"
                    name="title"
                    placeholder="Enter Title"
                    type="text"
                    errorMessage={errors.title || "Please enter a valid title"}
                    isInvalid={errors.title}
                />

                <FileImageUploadForm
                    data={formData}
                    setData={setData}
                    processing={processing}
                />


                <EditorProvider>
                    <Editor value={formData.description} onChange={(e) => {
                        setData('description', e.target.value);
                    }} />
                </EditorProvider>

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

