import { VerticalDotsIcon } from "@/Components/Tables/ServerSideTable";
import { formatRupiah } from "@/utils/format_rupiah";
import { router } from "@inertiajs/react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

const columnRender = (data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
        case "product_name":
            return (
                <p>{data.product_name}</p>
            );
        case "category":
            return (
                <p>{data.category}</p>
            );
        case "brand":
            return (
                <p>{data.brand}</p>
            );
        case "price":
            return (
                <p>{formatRupiah(data.price)}</p>
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
