import React from "react";
import { Form, Input, Button } from "@nextui-org/react";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import { Head } from "@inertiajs/react";

export default function Edit({ user }) {
    const [action, setAction] = React.useState(null);

    return (
        <BackofficeLayout>
            <Head title="Edit User"></Head>
            <Form
                className="w-full max-w-xs flex flex-col gap-4"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(new FormData(e.currentTarget));

                    setAction(`submit ${JSON.stringify(data)}`);
                }}
            >
                <Input
                    isRequired
                    errorMessage="Please enter a valid username"
                    label="Username"
                    labelPlacement="outside"
                    name="username"
                    placeholder="Enter your username"
                    type="text"
                />

                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />
                <div className="flex gap-2">
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                    <Button type="reset" variant="flat">
                        Reset
                    </Button>
                </div>
                {action && (
                    <div className="text-small text-default-500">
                        Action: <code>{action}</code>
                    </div>
                )}
            </Form>
        </BackofficeLayout>
    );
}

