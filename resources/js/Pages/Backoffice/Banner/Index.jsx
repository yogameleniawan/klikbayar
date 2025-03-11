import AlertMessage from '@/Components/Alert/AlertMessage'
import FileImageUploadForm from '@/Components/Form/FileImageUploadForm'
import BackofficeLayout from '@/Layouts/BackofficeLayout'
import { Head, router, useForm } from '@inertiajs/react'
import { BreadcrumbItem, Breadcrumbs, Button, Form, Image, Input, Progress } from '@nextui-org/react'
import React from 'react'
import { XCircleIcon } from 'lucide-react';

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
                        <div key={i} className="relative flex items-center p-4 border rounded-lg">
                            <Button
                                key={i}
                                isIconOnly
                                type="button"
                                onPress={() => {
                                    router.delete(route('backoffice.banners.destroy', { id: item.id }), {
                                        onStart: () => setIsLoading(item.id),
                                        onFinish: () => setIsLoading(item.id)
                                    });
                                }}
                                className="absolute top-2 right-2"
                                isLoading={isLoading === item.id}
                            >
                                <XCircleIcon size={20} />
                            </Button>

                            <div className="flex items-center space-x-4 flex-1">
                                <Image src={route('stream', {
                                    path: item.file.path
                                })} alt="preview"
                                    className="w-16 h-16 object-cover rounded" />

                                <div className="flex-1">
                                    <p className="font-medium truncate">{item.file.file_name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </BackofficeLayout>
    )
}

export default Index
