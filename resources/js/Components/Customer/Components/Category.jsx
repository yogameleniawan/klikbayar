import { Chip } from '@nextui-org/react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCase } from '@/Components/Icons/Icon'
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
            className="relative flex items-center space-x-2 px-3 py-2 cursor-pointer"
        >
            {isActive && (
                <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl border-1 border-solid border-default"
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
                className={`relative z-10 transition-all duration-200 ${isActive ? 'bg-opacity-20 text-white' : ''}`}
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
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-30 sticky top-20 flex flex-row items-center gap-4 overflow-y-hidden overflow-x-scroll sm:overflow-x-hidden max-w-80 sm:max-w-none sm:flex-wrap bg-default-100 p-2 rounded-3xl mx-8 sm:justify-center"
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
    )
}

export default Category
