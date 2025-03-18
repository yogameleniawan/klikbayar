import React from "react";
import { Button, Input, Checkbox, Link, Form, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Head, useForm } from "@inertiajs/react";

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

export default function Login({ status, canResetPassword }) {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleInputChange = (name, value) => {
        setData(name, value)
        clearErrors()
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="flex h-full w-full items-center justify-center">
            <Head title="Log in" />
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
                <div className="flex flex-col items-center pb-6">
                    <AcmeIcon size={60} />
                    <p className="text-xl font-medium">Welcome Back</p>
                    <p className="text-small text-default-500">Log in to your account to continue</p>
                </div>
                <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
                    <Input
                        isRequired
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        errorMessage={errors.email}
                        isInvalid={errors.email ? true : false}
                        value={data.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    <Input
                        isRequired
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
                        errorMessage={errors.password}
                        isInvalid={errors.password ? true : false}
                        value={data.password}
                        isFocused={true}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                    <div className="flex w-full items-center justify-between px-1 py-2">
                        <Checkbox name="remember" size="sm">
                            Remember me
                        </Checkbox>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-default-500"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>
                    <Button className="w-full" color="primary" type="submit" isLoading={processing}>
                        Sign In
                    </Button>
                </Form>
                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        onPress={() => {
                            window.location.href = route('auth.google');
                        }}
                        startContent={<Icon icon="flat-color-icons:google" width={24} />}
                        variant="bordered"
                    >
                        Continue with Google
                    </Button>
                </div>
                <p className="text-center text-small">
                    Need to create an account?&nbsp;
                    <Link href={route('register')} size="sm">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
