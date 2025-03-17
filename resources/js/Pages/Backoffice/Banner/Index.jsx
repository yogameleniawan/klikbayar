import AlertMessage from '@/Components/Alert/AlertMessage'
import FileImageUploadForm from '@/Components/Form/FileImageUploadForm'
import BackofficeLayout from '@/Layouts/BackofficeLayout'
import { Head, router, useForm } from '@inertiajs/react'
import { BreadcrumbItem, Breadcrumbs, Button, Form, Image, Input, Progress } from '@heroui/react'
import React from 'react'
import { XCircleIcon } from 'lucide-react';
import FilePreview from '@/Components/FilePreview'

const Index = ({ banners }) => {
    const { data, setData, post, processing, reset } = useForm({
        image: [],
    });

    const [isLoading, setIsLoading] = React.useState("");

    const submit = (e) => {
        e.preventDefault();

        post(route('backoffice.banners.store'), {
            onFinish: () => reset('image'),
        });
    };

    return (
        <BackofficeLayout>
            <Head title="Banners" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Banners</BreadcrumbItem>
            </Breadcrumbs>

            <AlertMessage />
            <Form className="flex flex-col gap-3" onSubmit={submit} encType='multipart/form-data'>
                <FileImageUploadForm
                    className={"w-full"}
                    data={data}
                    setData={setData}
                    processing={processing}
                    multiple />
                <Button className="w-full" color="primary" type="submit" isLoading={processing} isDisabled={data.image.length == 0}>
                    Add
                </Button>
            </Form>

            {
                banners.map((item, i) => {
                    return (
                        <FilePreview key={i} file={item} url={"backoffice.banners.destroy"} />
                    )
                })
            }
        </BackofficeLayout>
    )
}

export default Index
