import ServerSideTable from "@/Components/Tables/ServerSideTable";
import { columnRender } from "@/Data/Tables/Backoffice/Products/Catalog/column";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function Index({ products: data }) {
    return (
        <BackofficeLayout>
            <Head title="Product Catalog" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.catalog.index')) }}>Catalog</BreadcrumbItem>
            </Breadcrumbs>
            <ServerSideTable
                initialVisibleColumns={["name", "brand", "category_name", "actions"]}
                columns={[
                    { name: "ID", uid: "id", sortable: true },
                    { name: "NAME", uid: "name", sortable: true },
                    { name: "BRAND", uid: "brand", sortable: true },
                    { name: "CATEGORY", uid: "category_name", sortable: true },
                    { name: "ACTIONS", uid: "actions" },
                ]}
                collections={data}
                columnRender={columnRender}
                routeName={'backoffice.products.catalog'}
            />
        </BackofficeLayout>
    );
}

