import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function AdminDashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/events", data);
        setTitle("");
        setDescription("");
        setCategory("");
        setIsNotif(true);
    };

    useEffect(() => {
        if (!props.myEvents) {
            Inertia.get("/events");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="AdminDashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 text-gray-900">
                        {isNotif && (
                            <div className="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <span>{props.flash.message}!</span>
                            </div>
                        )}

                        {isNotif && <p></p>}

                        <input
                            id="name"
                            type="text"
                            placeholder="Event Name"
                            className="m-2 input input-bordered w-full"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            id="description"
                            placeholder="Description"
                            className="m-2 input input-bordered w-full"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                            id="category"
                            type="text"
                            placeholder="Category"
                            className="m-2 input input-bordered w-full"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                        <button
                            className="btn btn-outline m-2"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                    {props.myEvents && props.myEvents.length > 0 ? (
                        props.myEvents.map((events, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card w-96 bg-base-100 shadow-xl m-2"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {events.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>{events.description}</p>
                                        <p>Category: {events.category}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("edit.events")}
                                                    method="get"
                                                    data={{ id: events.id }}
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route(
                                                        "delete.events"
                                                    )}
                                                    method="post"
                                                    data={{ id: events.id }}
                                                    as="button"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>You dont have any event yet</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
