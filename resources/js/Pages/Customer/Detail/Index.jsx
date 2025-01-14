import CustomerLayout from '@/Layouts/CustomerLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Index = () => {
    return (
        <CustomerLayout>
            <Head title="Beranda" />
            <div className="flex flex-col items-center gap-8">
                <p>tes</p>
            </div>
        </CustomerLayout>
    )
}

export default Index
