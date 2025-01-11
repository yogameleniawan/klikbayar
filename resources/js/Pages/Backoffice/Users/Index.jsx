import ServerSideTable from "@/Components/Tables/ServerSideTable";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <BackofficeLayout>
            <Head title="Users" />
            <ServerSideTable
                initialVisibleColumns={["name", "role", "status", "actions"]}
                columns={[
                    {name: "ID", uid: "id", sortable: true},
                    {name: "NAME", uid: "name", sortable: true},
                    {name: "AGE", uid: "age", sortable: true},
                    {name: "ROLE", uid: "role", sortable: true},
                    {name: "TEAM", uid: "team"},
                    {name: "EMAIL", uid: "email"},
                    {name: "STATUS", uid: "status", sortable: true},
                    {name: "ACTIONS", uid: "actions"},
                  ]}
             />
        </BackofficeLayout>
    );
}

