import ServerSideTable from "@/Components/Tables/ServerSideTable";
import { columnRender } from "@/Data/Tables/Backoffice/Users/column";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

export default function Index({ users: data }) {
    return (
        <BackofficeLayout>
            <Head title="Users" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Users</BreadcrumbItem>
            </Breadcrumbs>
            <ServerSideTable
                initialVisibleColumns={["name", "email", "actions"]}
                columns={[
                    {name: "ID", uid: "id", sortable: true},
                    {name: "NAME", uid: "name", sortable: true},
                    {name: "EMAIL", uid: "email", sortable: true},
                    {name: "ACTIONS", uid: "actions"},
                  ]}
                collections={data}
                columnRender={columnRender}
                routeName={'backoffice.users'}
             />
        </BackofficeLayout>
    );
}

