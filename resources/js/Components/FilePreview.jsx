import { Button, Image } from '@heroui/react';
import { router } from '@inertiajs/react';
import { XCircleIcon } from 'lucide-react';
import React, { useState } from 'react'

const FilePreview = ({ file, url }) => {
    const [isLoading, setIsLoading] = useState("");

    if (!file) return;

    return (
        <div className="relative flex items-center p-4 border rounded-lg">
            <Button
                isIconOnly
                type="button"
                onPress={() => {
                    router.delete(route(url, { id: file.id }), {
                        onStart: () => setIsLoading(file.id),
                        onFinish: () => setIsLoading(file.id)
                    });
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
