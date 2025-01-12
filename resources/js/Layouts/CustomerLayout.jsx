import Footer from '@/Components/Footer/Footer'
import CustomerNavbar from '@/Components/Navbar/CustomerNavbar'
import React from 'react'

const CustomerLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-full min-h-screen bg-default-50 dark:bg-default-50">
            <div className="sticky top-0 z-10">
                <CustomerNavbar />
            </div>

            <div className="flex-1 flex flex-col">
                {children}
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default CustomerLayout
