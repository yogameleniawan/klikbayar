import ServerSideTable from "@/Components/Tables/ServerSideTable";
import { columnRender } from "@/Data/Tables/Backoffice/Users/column";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function Index({ courses: data }) {
    return (
        <BackofficeLayout>
            <Head title="Courses" />
            <Breadcrumbs>
                <BreadcrumbItem>Admin</BreadcrumbItem>
                <BreadcrumbItem>Courses</BreadcrumbItem>
            </Breadcrumbs>
            <ServerSideTable
                initialVisibleColumns={["title", "actions"]}
                columns={[
                    {name: "ID", uid: "id", sortable: true},
                    {name: "TITLE", uid: "title", sortable: true},
                    {name: "ACTIONS", uid: "actions"},
                  ]}
                collections={data}
                columnRender={columnRender}
                routeName={'courses'}
             />
        </BackofficeLayout>
    );
}

