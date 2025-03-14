import { IconCase } from "@/Components/Icons/Icon";
import { VerticalDotsIcon } from "@/Components/Tables/ServerSideTable";
import { router } from "@inertiajs/react";
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, User } from "@heroui/react";
import { FiEdit } from "react-icons/fi";

const columnRender = (data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
        case "name":
            return (
                <p>{data.name}</p>
            );
        case "icon":
            return (
                IconCase(data.icon)
            );
        case "actions":
            return (
                <div className="relative flex justify-end items-center gap-2">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light">
                                <VerticalDotsIcon className="text-default-300" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key="edit" onPress={() => {
                                router.get(route('backoffice.products.categories.edit', { id: data.id }));
                            }}>
                                Edit
                            </DropdownItem>
                            <DropdownItem key="delete" onPress={() => {
                                router.delete(route('backoffice.products.categories.destroy', { id: data.id }));
                            }}>
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            );
        default:
            return cellValue;
    }
};

export { columnRender };
