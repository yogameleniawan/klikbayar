import { VerticalDotsIcon } from "@/Components/Tables/ServerSideTable";
import { router } from "@inertiajs/react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";

const columnRender = (data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
        case "name":
            return (
                <p>{data.name}</p>
            );
        case "code":
            return (
                <p>{data.code}</p>
            );
        case "category":
            return (
                <p>{data.category}</p>
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
                                router.get(route('backoffice.payment-methods.edit', { id: data.id }));
                            }}>
                                Edit
                            </DropdownItem>
                            <DropdownItem key="delete" onPress={() => {
                                router.delete(route('backoffice.payment-methods.destroy', { id: data.id }));
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
