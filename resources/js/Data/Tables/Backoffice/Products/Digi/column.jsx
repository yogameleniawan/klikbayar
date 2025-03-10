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
        default:
            return cellValue;
    }
};

export { columnRender };
