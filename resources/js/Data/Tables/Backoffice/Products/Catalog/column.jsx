import { VerticalDotsIcon } from "@/Components/Tables/ServerSideTable";
import { router } from "@inertiajs/react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

const columnRender = (data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
        case "name":
            return (
                <p>{data.name}</p>
            );
        case "brand":
            return (
                <p>{data.brand}</p>
            );
        case "category_name":
            return (
                <p>{data.category_name}</p>
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
                                router.get(route('backoffice.products.catalog.edit', { id: data.id }));
                            }}>
                                Edit
                            </DropdownItem>
                            <DropdownItem key="delete" onPress={() => {
                                router.delete(route('backoffice.products.catalog.destroy', { id: data.id }));
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
