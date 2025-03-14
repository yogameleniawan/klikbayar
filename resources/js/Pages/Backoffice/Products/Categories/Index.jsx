import ServerSideTable from "@/Components/Tables/ServerSideTable";
import { columnRender } from "@/Data/Tables/Backoffice/Products/Categories/column";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

export default function Index({ categories: data }) {
    return (
        <BackofficeLayout>
            <Head title="Product Categories" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.products.categories.index')) }}>Categories</BreadcrumbItem>
            </Breadcrumbs>
            <ServerSideTable
                initialVisibleColumns={["name", "icon", "actions"]}
                columns={[
                    { name: "ID", uid: "id", sortable: true },
                    { name: "NAME", uid: "name", sortable: true },
                    { name: "ICON", uid: "icon", sortable: true },
                    { name: "ACTIONS", uid: "actions" },
                ]}
                collections={data}
                columnRender={columnRender}
                routeName={'backoffice.products.categories'}
            />
        </BackofficeLayout>
    );
}

