import AuthenticatedLayoutUser from "@/Layouts/AuthenticatedLayoutUser";
import { Link, Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";

export default function UserDashboard(props) {
    const [isNotif, setIsNotif] = useState(false);
    const i = 0;

    const handleSubmit = () => {
        setIsNotif(true);
    };

    useEffect(() => {
        if (!props.joinedevent) {
            Inertia.get("/joinedevent");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayoutUser
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Dashboard
                </h2>
            }
        >
            <Head title="UserDashboard" />

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

                        {props.joinedevent && props.joinedevent.length > 0 ? (
                            <div className="overflow-x-auto">
                                <h2 className="text-2xl text-center mb-4">
                                    Your joined events
                                </h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            {/* <th>ID</th> */}
                                            <th>Title</th>
                                            <th>Event Date</th>
                                            <th>Type</th>
                                            <th>Category</th>
                                            <th>Author</th>
                                            <th>Joined at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.joinedevent.map(
                                            (event, index) => (
                                                <tr key={event.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link
                                                            href={route(
                                                                "event.info"
                                                            )}
                                                            method="get"
                                                            data={{
                                                                id: event.event_id,
                                                            }}
                                                        >
                                                            {/* Tambahkan elemen <button> di dalam <Link> */}
                                                            <button
                                                                className="tooltip tooltip-right"
                                                                data-tip={
                                                                    event.description
                                                                }
                                                            >
                                                                {
                                                                    event.event_title
                                                                }
                                                                {/* Tambahkan elemen tooltip di dalam <button> */}
                                                            </button>
                                                        </Link>
                                                    </td>
                                                    <td>{event.date}</td>
                                                    <td>{event.type}</td>
                                                    <td>{event.category}</td>
                                                    <td>{event.author}</td>
                                                    <td>{event.created_at}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No data available.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayoutUser>
    );
}
