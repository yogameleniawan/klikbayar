import React, { useState } from 'react';
import { Card } from '@nextui-org/react';
import { Form } from "@nextui-org/form";
import { FileIcon, XCircleIcon } from 'lucide-react';

const FileImageUploadForm = ({
    data,
    setData,
    maxSize = 10485760, // 10MB in bytes
    maxFiles = null,
    acceptedFileTypes = "*/*",
    className = "",
    multiple = false,
}) => {
    const [previews, setPreviews] = useState([]);
    const [error, setError] = useState(null);

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const validateFiles = (fileList) => {
        for (let file of fileList) {
            if (file.size > maxSize) {
                return `File ${file.name} is too large. Maximum size is ${formatFileSize(maxSize)}`;
            }
        }

        if (maxFiles && fileList.length > maxFiles) {
            return `Maximum ${maxFiles} files allowed`;
        }

        return null;
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        const validationError = validateFiles(selectedFiles);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError(null);

        setData('image', [...data.image, ...selectedFiles]);

        const newPreviews = selectedFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: file.type.startsWith('image/')
                ? URL.createObjectURL(file)
                : null,
            progress: 0
        }));

        setPreviews(prev => [...prev, ...newPreviews]);
    };

    const removeFile = (id) => {
        setPreviews(prev => {
            const preview = prev.find(p => p.id === id);
            if (preview && preview.preview) {
                URL.revokeObjectURL(preview.preview);
            }
            return prev.filter(p => p.id !== id);
        });
    };

    return (
        <Card className={`p-4 ${className} w-full`}>
            <Form>
                <div className="mb-4 w-full">
                    <label
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-default-100 hover:bg-default-100/40 transition-colors"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                                {multiple && `Multiple files allowed`}
                                {maxFiles ? `Maximum ${maxFiles} files` : ''} (Max: {formatFileSize(maxSize)})
                            </p>
                        </div>
                        <input
                            type="file"
                            multiple={multiple}
                            className="hidden"
                            onChange={handleFileChange}
                            accept={acceptedFileTypes}
                        />
                    </label>
                </div>

                {error && (
                    <div className="text-red-500 text-sm mb-4">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    {previews.map((preview) => (
                        <div key={preview.id} className="relative flex items-center p-4 border rounded-lg">
                            <button
                                type="button"
                                onClick={() => removeFile(preview.id)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <XCircleIcon size={20} />
                            </button>

                            <div className="flex items-center space-x-4 flex-1">
                                {preview.file.type.startsWith('image/') ? (
                                    <img
                                        src={preview.preview}
                                        alt="preview"
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                ) : (
                                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
                                        <FileIcon size={24} className="text-gray-500" />
                                    </div>
                                )}

                                <div className="flex-1">
                                    <p className="font-medium truncate">{preview.file.name}</p>
                                    <p className="text-sm text-gray-500">{formatFileSize(preview.file.size)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Form>
        </Card>
    );
};

export default FileImageUploadForm;
