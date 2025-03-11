import ServerSideTable from "@/Components/Tables/ServerSideTable";
import { columnRender } from "@/Data/Tables/Backoffice/Products/Digi/column";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IoSync } from "react-icons/io5";

export default function Index({ products: data }) {

    const syncMutation = useMutation({
        mutationFn: () => {
            return axios.post(route('backoffice.products.digi.store'));
        },
        onSuccess: () => {
            window.location.reload();
        }
    })

    return (
        <BackofficeLayout>
            <Head title="Product Digiflazz" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.digi.index')) }}>Product Digiflazz</BreadcrumbItem>
            </Breadcrumbs>
            <Button className="w-40" endContent={<IoSync />} color="primary" onPress={() => {
                syncMutation.mutate();
            }} isLoading={syncMutation.isPending}>
                Sync
            </Button>
            <ServerSideTable
                initialVisibleColumns={["product_name", "category", "brand", "price"]}
                columns={[
                    { name: "ID", uid: "id", sortable: true },
                    { name: "PRODUCT NAME", uid: "product_name", sortable: true },
                    { name: "CATEGORY", uid: "category", sortable: true },
                    { name: "BRAND", uid: "brand", sortable: true },
                    { name: "PRICE", uid: "price", sortable: true },
                ]}
                collections={data}
                columnRender={columnRender}
                routeName={'backoffice.products.digi'}
                buttonAdd={false}
            />
        </BackofficeLayout>
    );
}

