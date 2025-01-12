import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import React from "react";
import { Button, Input, Checkbox, Link, Divider, Form } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const AcmeIcon = ({ size = 32, width, height, ...props }) => (
    <svg fill="none" height={size || height} viewBox="0 0 32 32" width={size || width} {...props}>
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [isVisible, setIsVisible] = React.useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

    const submit = (e) => {
        console.log(e)
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="flex h-full w-full items-center justify-center">
            <Head title="Register" />
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
                <div className="flex flex-col items-center pb-6">
                    <AcmeIcon size={60} />
                    <p className="text-xl font-medium">Welcome</p>
                    <p className="text-small text-default-500">Create an account to get started</p>
                </div>
                <Form className="flex flex-col gap-3" onSubmit={submit}>
                    <div className="flex flex-col w-full">
                        <Input
                            isRequired
                            classNames={{
                                base: "-mb-[2px]",
                                inputWrapper:
                                    "rounded-b-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
                            }}
                            label="Name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            variant="bordered"
                            value={data.name}
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            errorMessage={errors.name}
                            isInvalid={errors}
                        />
                        <Input
                            isRequired
                            classNames={{
                                base: "-mb-[2px]",
                                inputWrapper:
                                    "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
                            }}
                            label="Email Address"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                            value={data.email}
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            errorMessage={errors.email}
                            isInvalid={errors}
                        />
                        <Input
                            isRequired
                            classNames={{
                                base: "-mb-[2px]",
                                inputWrapper:
                                    "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
                            }}
                            endContent={
                                <button type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <Icon
                                            className="pointer-events-none text-2xl text-default-400"
                                            icon="solar:eye-closed-linear"
                                        />
                                    ) : (
                                        <Icon
                                            className="pointer-events-none text-2xl text-default-400"
                                            icon="solar:eye-bold"
                                        />
                                    )}
                                </button>
                            }
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type={isVisible ? "text" : "password"}
                            variant="bordered"
                            isFocused={true}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            errorMessage={errors.password}
                            isInvalid={errors}
                        />
                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: "rounded-t-none",
                            }}
                            endContent={
                                <button type="button" onClick={toggleConfirmVisibility}>
                                    {isConfirmVisible ? (
                                        <Icon
                                            className="pointer-events-none text-2xl text-default-400"
                                            icon="solar:eye-closed-linear"
                                        />
                                    ) : (
                                        <Icon
                                            className="pointer-events-none text-2xl text-default-400"
                                            icon="solar:eye-bold"
                                        />
                                    )}
                                </button>
                            }
                            label="Confirm Password"
                            name="password_confirmation"
                            placeholder="Confirm your password"
                            type={isConfirmVisible ? "text" : "password"}
                            variant="bordered"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            errorMessage={errors.password_confirmation}
                            isInvalid={errors}
                            isFocused={true}
                        />
                    </div>
                    <Checkbox isRequired className="py-4" size="sm">
                        I agree with the&nbsp;
                        <Link href="#" size="sm">
                            Terms
                        </Link>
                        &nbsp; and&nbsp;
                        <Link href="#" size="sm">
                            Privacy Policy
                        </Link>
                    </Checkbox>
                    <Button className='w-full' color="primary" type="submit" isLoading={processing}>
                        Sign Up
                    </Button>
                </Form>
                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        startContent={<Icon icon="flat-color-icons:google" width={24} />}
                        variant="bordered"
                    >
                        Sign Up with Google
                    </Button>
                </div>
                <p className="text-center text-small">
                    Already have an account?&nbsp;
                    <Link href={route('login')} size="sm">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
