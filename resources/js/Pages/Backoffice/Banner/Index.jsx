import AlertMessage from '@/Components/Alert/AlertMessage'
import FileImageUploadForm from '@/Components/Form/FileImageUploadForm'
import BackofficeLayout from '@/Layouts/BackofficeLayout'
import { Head, useForm } from '@inertiajs/react'
import { BreadcrumbItem, Breadcrumbs, Button, Form, Image, Input } from '@nextui-org/react'
import React from 'react'

const Index = ({ banners }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        image: [],
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('banners.store'), {
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
                    data={data}
                    setData={setData}
                    multiple />
                <Button className="w-full" color="primary" type="submit" isLoading={processing}>
                    Add
                </Button>
            </Form>

            {
                banners.map((item, i) => {
                    return (
                        <Image src={route('stream', {
                            path: item.image
                        })} />
                    )
                })
            }
        </BackofficeLayout>
    )
}

export default Index
