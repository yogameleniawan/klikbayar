import { usePage } from '@inertiajs/react';
import { Alert } from '@heroui/react';
import React from 'react'

const AlertMessage = () => {
    const { errors } = usePage().props;
    const { flash } = usePage().props;

    return (
        <>
            {errors.message && (
                <Alert color={'danger'} title={errors.message} />
            )}
            {flash.message && (
                <Alert color={'success'} title={flash.message} />
            )}
        </>
    )
}

export default AlertMessage
