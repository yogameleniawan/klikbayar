import { Chip } from '@nextui-org/react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initialItems = [
    {
        id: 1,
        name: "Mobile Game",
        total: 9,
        isActive: true,
    },
    {
        id: 2,
        name: "PC Game",
        total: 9,
        isActive: false,
    },
    {
        id: 3,
        name: "Voucher",
        total: 9,
        isActive: false,
    },
    {
        id: 4,
        name: "Pulsa",
        total: 9,
        isActive: false,
    }
]

const CategoryItem = ({
    id,
    name,
    total,
    isActive,
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
            <span className={`relative z-10 text-nowrap ${isActive ? 'text-white' : 'text-default-700'}`}>
                {name}
            </span>
            <Chip
                size="sm"
                className={`relative z-10 transition-all duration-200 ${isActive ? 'bg-opacity-20' : ''}`}
            >
                {total}
            </Chip>
        </div>
    );
}

const Category = () => {
    const [items, setItems] = useState(initialItems);

    const handleCategoryClick = (clickedId) => {
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
            className="z-30 sticky top-20 flex flex-row items-center gap-4 overflow-y-hidden overflow-x-scroll sm:overflow-x-hidden max-w-96 sm:max-w-none bg-default-100 p-2 rounded-3xl"
        >
            <AnimatePresence mode="wait">
                {items.map((item) => (
                    <CategoryItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        total={item.total}
                        isActive={item.isActive}
                        onClick={handleCategoryClick}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    )
}

export default Category
