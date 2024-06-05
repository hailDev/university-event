import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";

export default function AdminDashboard(props) {
    const categoryOptions = ["Offline", "Online"];
    const typeOptions = ["Webinar", "Belmawa", "Community"];
    const currentDate = new Date().toISOString().split("T")[0];

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [date, setDate] = useState(null);
    const [image, setImage] = useState(null);
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        // formData.append("category", category);
        formData.append("category", selectedCategory);
        formData.append("type", selectedType);
        formData.append("date", date);
        formData.append("image", image);

        Inertia.post("/events", formData).then(() => {
            setTitle("");
            setDescription("");
            setCategory("");
            setType("");
            setImage(null);
            setIsNotif(true);
        });
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
            <div className="flex flex-wrap justify-center -mx-3 mb-6 mt-6">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-4">
                    <div className="card-body">
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            encType="multipart/form-data"
                            method="POST"
                        >
                            <div className="form-control p-1">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Event Name"
                                    className="input input-bordered"
                                    onChange={(title) =>
                                        setTitle(title.target.value)
                                    }
                                    value={title}
                                    required
                                />
                            </div>
                            <div className="form-control p-1">
                                <input
                                    type="text"
                                    id="description"
                                    placeholder="Description"
                                    className="input input-bordered"
                                    onChange={(description) =>
                                        setDescription(description.target.value)
                                    }
                                    value={description}
                                    required
                                />
                            </div>
                            {/* <div className="form-control p-1">
                                <input
                                    id="category"
                                    type="text"
                                    placeholder="Category"
                                    className="input input-bordered"
                                    onChange={(category) =>
                                        setCategory(category.target.value)
                                    }
                                    value={category}
                                />
                            </div> */}
                            <div className="form-control p-1">
                                <select
                                    id="category"
                                    className="select select-bordered w-full"
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        setSelectedCategory(e.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Select the category
                                    </option>
                                    {categoryOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-control p-1">
                                <select
                                    id="type"
                                    className="select select-bordered w-full"
                                    value={selectedType}
                                    onChange={(e) =>
                                        setSelectedType(e.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Select the event type
                                    </option>
                                    {typeOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-control p-1">
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="input input-bordered"
                                    min={currentDate}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control p-1">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="file-input file-input-primary w-full max-w-xs"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* r1 */}
                <div className="w-full md:w-1/2 m-4 sm:flex">
                    {props.myEvents && props.myEvents.length > 0 ? (
                        <div className="carousel w-full">
                            {props.myEvents.map((event, i) => (
                                <div
                                    key={i}
                                    id={`slide${i + 1}`}
                                    className="carousel-item relative w-full"
                                >
                                    <Link href={route("event.lists")}>
                                        <img
                                            src={event.event_image}
                                            className="w-full h-full object-cover rounded-md"
                                            alt={`Slide ${i + 1}`}
                                        />
                                    </Link>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href={`#slide${
                                                i === 0
                                                    ? props.myEvents.length
                                                    : i
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href={`#slide${
                                                i === props.myEvents.length - 1
                                                    ? 1
                                                    : i + 2
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>You dont have any event yet</p>
                    )}
                </div>
                {/* r1 */}

                {/* <div className="w-full md:w-1/2 m-4 sm:flex">
                    {props.myEvents && props.myEvents.length > 0 ? (
                        <div className="carousel w-full">
                            {props.myEvents.map((event, i) => (
                                <div
                                    key={i}
                                    id={`slide${i + 1}`}
                                    className="carousel-item relative w-full"
                                >
                                    <img
                                        src={event.event_image}
                                        className="w-full max-h-80 object-cover max-w-md"
                                        alt={`Slide ${i + 1}`}
                                    />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href={`#slide${
                                                i === 0
                                                    ? props.myEvents.length
                                                    : i
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href={`#slide${
                                                i === props.myEvents.length - 1
                                                    ? 1
                                                    : i + 2
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>You dont have any event yet</p>
                    )}
                </div> */}
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                {props.myEvents && props.myEvents.length > 0 ? (
                    props.myEvents.map((events, i) => {
                        return (
                            <div
                                key={i}
                                className="card w-96 bg-base-100 shadow-xl m-2"
                            >
                                <figure>
                                    <img
                                        className="w-full h-60  object-cover"
                                        src={events.event_image}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {events.title}
                                        {/* <div className="badge badge-secondary">
                                            NEW
                                        </div> */}
                                    </h2>
                                    {/* <p>{events.description}</p> */}
                                    <p>Category: {events.category}</p>
                                    <p>Type : {events.type}</p>
                                    <p>Date : {events.date}</p>
                                    <div className="card-actions m-4 justify-end">
                                        <div className="badge badge-outline">
                                            <Link
                                                href={route(
                                                    "registrars.events",
                                                    { id: events.id }
                                                )}
                                                method="get"
                                                // data={{ id: events.id }}
                                                as="button"
                                            >
                                                Info
                                            </Link>
                                        </div>
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
                                                href={route("delete.events")}
                                                method="post"
                                                data={{ id: events.id }}
                                                as="button"
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                        <div
                                            data-tip={events.description}
                                            className="badge badge-outline tooltip"
                                        >
                                            <Link as="button">Desc</Link>
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
            <Footer />
        </AuthenticatedLayout>
    );
}
