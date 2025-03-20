import { Button, Image } from '@heroui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { XCircleIcon } from 'lucide-react';
import React, { useState } from 'react'

const ProductPreview = ({ file, url, id, onDelete }) => {
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();

    const removeMutation = useMutation({
        mutationFn: () => {
            setIsLoading(true);
            return axios.post(route(url, { id: id }));
        },
        onSuccess: (res) => {
            setIsLoading(false);
            // Notify parent component about deletion
            if (onDelete) onDelete(id);

            addToast({
                title: "Success",
                description: res.data.message,
                color: "success",
            });
        },
        onError: (res) => {
            setIsLoading(false);
            addToast({
                title: res.response.statusText,
                description: res.response.data.error,
                color: "danger",
            });
        }
    });

    if (!file) return null;

    return (
        <div className="relative flex flex-col items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow transition-all bg-white dark:bg-default-100">
            <Button
                isIconOnly
                type="button"
                onPress={() => removeMutation.mutate()}
                className="absolute -top-2 -right-2 bg-white dark:bg-default-200 rounded-full shadow-sm hover:shadow z-10"
                size="sm"
                isLoading={isLoading}
            >
                <XCircleIcon size={18} className="text-red-500" />
            </Button>

            <Image
                src={route('stream', { path: file.path })}
                alt={file.file_name || "Product image"}
                className="w-20 h-20 object-cover rounded-md mb-2"
            />

            <div className="w-full">
                <p className="text-xs font-medium text-center truncate px-1">{file.file_name}</p>
            </div>
        </div>
    );
};

export default ProductPreview
