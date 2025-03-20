import { Button, Image } from '@heroui/react';
import { useMutation } from '@tanstack/react-query';
import { XCircleIcon } from 'lucide-react';
import React, { useState } from 'react'

const FilePreview = ({ file, url }) => {
    const [isLoading, setIsLoading] = useState("");
    const [isDeleted, setIsDeleted] = useState("");

    const removeMutation = useMutation({
        mutationFn: () => {
            setIsLoading(file.id)
            return axios.post(route(url, { id: file.id }));
        },
        onSuccess: (res) => {
            setIsDeleted(file.id)
            addToast({
                title: "Success",
                description: res.data.message,
                color: "success",
            })
        },
        onError: (res) => {
            addToast({
                title: res.response.statusText,
                description: res.response.data.error,
                color: "danger",
            })
        }
    })


    if (!file) return;

    if (isDeleted === file.id) return;

    return (
        <div className="relative flex items-center p-4 border rounded-lg">
            <Button
                isIconOnly
                type="button"
                onPress={() => {
                    removeMutation.mutate();
                }}
                className="absolute top-2 right-2"
                isLoading={isLoading === file.id}
            >
                <XCircleIcon size={20} />
            </Button>

            <div className="flex flex-col items-center space-x-4 flex-1 gap-2">
                <Image src={route('stream', {
                    path: file.path
                })} alt="preview"
                    className="w-16 h-16 object-cover rounded" />

                <div className="flex-1">
                    <p className="text-[8px] font-medium truncate">{file.file_name}</p>
                </div>
            </div>

        </div>
    )
}

export default FilePreview
