import { Chip } from '@heroui/react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, IconCase } from '@/Components/Icons/Icon'
import { usePage } from '@inertiajs/react'
import { useCategoryCatalogStore } from '@/store/useCategoryCatalogStore'

const CategoryItem = ({
    id,
    name,
    total,
    isActive,
    icon,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(id)}
            className="relative flex items-center space-x-2 px-3 py-2 cursor-pointer text-sm sm:text-md"
        >
            {isActive && (
                <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl border-1 border-solid border-default"
                    initial={false}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                />
            )}
            <div className={`relative ${isActive ? 'bg-white rounded-full p-1' : 'text-default-700'}`}>
                {IconCase(icon)}
            </div>
            <span className={`relative z-10 text-nowrap ${isActive ? 'text-white' : 'text-default-700'}`}>
                {name}
            </span>
            <Chip
                size="sm"
                className={`relative z-10 transition-all duration-200 ${isActive ? 'bg-opacity-20 text-white' : 'bg-blue-500/20'}`}
            >
                {total}
            </Chip>
        </div>
    );
}

const Category = () => {
    const { categories } = usePage().props

    const [items, setItems] = useState(categories);

    const categoryStore = useCategoryCatalogStore();

    const handleCategoryClick = (clickedId) => {
        categoryStore.setCategory(clickedId);

        setItems(prevItems =>
            prevItems.map(item => ({
                ...item,
                isActive: item.id === clickedId
            }))
        );
    };

    return (
        <div className="flex flex-col z-30 sticky top-20 ">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-row items-center gap-4 overflow-y-hidden overflow-x-scroll sm:overflow-x-hidden max-w-[22rem] sm:max-w-none sm:flex-wrap bg-default-200 p-2 rounded-3xl mx-0 sm:mx-8 sm:justify-center"
            >
                <AnimatePresence>
                    {items.map((item) => (
                        <CategoryItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            total={item.total}
                            isActive={item.isActive}
                            icon={item.icon}
                            onClick={handleCategoryClick}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
            <div className="flex sm:mx-8 text-[10px] my-2 sm:hidden mx-0 sm:my-0 items-center gap-1">
                <Code />
                <p>Geser untuk kategori lainnya</p>
            </div>
        </div>
    )
}

export default Category
