import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className,
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            nim: user.nim,
        });
    const [image, setImage] = useState(user.user_image);

    // const handleImageUpload = (selectedImage) => {
    //     setData("image", selectedImage); // Update the image data in state
    // };

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("nim", data.nim);
        formData.append("email", data.email);
        formData.append("image", image);
        // if (data.image) {
        //     formData.append("image", data.image); // Append the image data to the form data
        // }

        Inertia.post(route("profile.update"), formData).then(() => {
            setImage(user.user_image);
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="mt-6 space-y-6"
            >
                <div className="flex flex-col">
                    <div className="">
                        <img src={user.user_image} className="w-auto" alt="" />
                    </div>
                    <div className="">
                        <div className="m-4">
                            <InputLabel htmlFor="nim" value="Nim" />

                            <TextInput
                                id="name"
                                className="mt-1 block w-full"
                                value={data.nim}
                                onChange={(e) => setData("nim", e.target.value)}
                                required
                                autoComplete="nim"
                                disabled
                            />

                            <InputError className="mt-2" message={errors.nim} />
                        </div>

                        <div className="m-4">
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                // isFocused
                                autoComplete="name"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>

                        <div className="m-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                autoComplete="username"
                                disabled
                            />

                            <InputError
                                className="mt-2"
                                message={errors.email}
                            />
                        </div>
                        <div className="m-4">
                            {/* <input
                                id="image"
                                name="image"
                                type="file"
                                className="file-input file-input-primary"
                                onChange={(e) => {
                                    console.log(
                                        "Selected image:",
                                        e.target.files[0]
                                    );
                                    setImage(e.target.files[0]);
                                }}
                            /> */}

                            <input
                                type="file"
                                id="image"
                                name="image"
                                className="file-input file-input-primary w-full max-w-xs"
                                onChange={(e) => {
                                    console.log(
                                        "Selected image:",
                                        e.target.files[0]
                                    );
                                    setImage(e.target.files[0]);
                                }}
                            />
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                                    Your email address is unverified.
                                    <Link
                                        href={route("verification.send")}
                                        method="post"
                                        as="button"
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Click here to re-send the verification
                                        email.
                                    </Link>
                                </p>

                                {status === "verification-link-sent" && (
                                    <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                        A new verification link has been sent to
                                        your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4 m-4">
                            <PrimaryButton disabled={processing}>
                                Save
                            </PrimaryButton>

                            <Transition
                                show={recentlySuccessful}
                                enterFrom="opacity-0"
                                leaveTo="opacity-0"
                                className="transition ease-in-out"
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Saved.
                                </p>
                            </Transition>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
