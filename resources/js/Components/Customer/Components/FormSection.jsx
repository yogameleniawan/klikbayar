import { Chip } from '@nextui-org/react'
import React from 'react'

const FormSection = ({
    title,
    number,
    children
}) => {
    return (
        <div className="flex flex-col bg-default-100 p-4 rounded-3xl mx-3">
            <div className="flex flex-col sm:flex-row ml-0 sm:-ml-11 -mt-3 sm:mt-0">
                <div className="flex gap-2 items-center bg-gradient-to-r from-cyan-300 to-blue-500 py-2 pl-2 pr-6 rounded-b-3xl sm:rounded-r-3xl text-default-100 font-bold">
                    <Chip
                        size="sm"
                        className={`bg-default-100 text-black dark:text-white`}
                    >{number}</Chip>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}

export default FormSection
