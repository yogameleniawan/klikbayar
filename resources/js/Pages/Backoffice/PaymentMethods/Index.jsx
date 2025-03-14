import ServerSideTable from "@/Components/Tables/ServerSideTable";
import { columnRender } from "@/Data/Tables/Backoffice/PaymentMethods/column";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

export default function Index({ payment_methods: data }) {
    return (
        <BackofficeLayout>
            <Head title="Product Catalog" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem onPress={() => { router.visit(route('backoffice.payment-methods.index')) }}>Payment Methods</BreadcrumbItem>
            </Breadcrumbs>
            <ServerSideTable
                initialVisibleColumns={["name", "code", "category", "actions"]}
                columns={[
                    { name: "ID", uid: "id", sortable: true },
                    { name: "NAME", uid: "name", sortable: true },
                    { name: "CODE", uid: "code", sortable: true },
                    { name: "CATEGORY", uid: "category", sortable: true },
                    { name: "ACTIONS", uid: "actions" },
                ]}
                collections={data}
                columnRender={columnRender}
                routeName={'backoffice.payment-methods'}
            />
        </BackofficeLayout>
    );
}

