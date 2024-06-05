import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";

export default function EditEvents(props) {
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

    console.log("image: ", image);

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedTitle = title;
        let updatedDescription = description;
        let updatedCategory = selectedCategory;
        let updatedType = selectedType;
        let updatedDate = date;
        let updatedImage = image;

        if (updatedTitle === "") {
            updatedTitle = props.myEvents.title;
        }
        if (updatedDescription === "") {
            updatedDescription = props.myEvents.description;
        }
        if (updatedCategory === "" || updatedCategory === null) {
            updatedCategory = props.myEvents.category;
        }
        if (updatedType === "" || updatedType === null) {
            updatedType = props.myEvents.type;
        }
        if (updatedDate === "" || updatedDate === null) {
            updatedDate = props.myEvents.date;
        }
        if (updatedImage === null) {
            updatedImage = props.myEvents.event_image;
        }

        const formData = new FormData();
        formData.append("id", props.myEvents.id);
        formData.append("title", updatedTitle);
        formData.append("description", updatedDescription);
        formData.append("category", updatedCategory);
        formData.append("type", updatedType);
        formData.append("date", updatedDate);
        formData.append("image", updatedImage);

        Inertia.post(route("update.events"), formData).then(() => {
            setImage(props.nyEvents.event_image);
        });

        // const data = {
        //     id: props.myEvents.id,
        //     title: updatedTitle,
        //     description: updatedDescription,
        //     category: updatedCategory,
        //     date: updatedDate,
        //     image: updatedImage,
        // };

        // Inertia.post("/events/update", data);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            {/* <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="p-2 text-2xl">Event Edit</div>
                <div className="card-body">
                    <input
                        id="name"
                        type="text"
                        placeholder="Event Name"
                        className="m-2 input input-bordered w-full"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myEvents.title}
                    />
                    <input
                        id="description"
                        type="text"
                        placeholder="Event Name"
                        className="m-2 input input-bordered w-full"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myEvents.description}
                    />
                    <input
                        id="category"
                        type="text"
                        placeholder="Event Name"
                        className="m-2 input input-bordered w-full"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myEvents.category}
                    />
                    <button
                        className="btn btn-outline m-2"
                        onClick={() => handleSubmit()}
                    >
                        UPDATE
                    </button>
                </div>
            </div> */}

            <div className="flex items-center justify-center mt-4 mb-4 bg-slate-50">
                <div className="flex flex-col items-center">
                    <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                        <div className="p-2 text-2xl">Event Edit</div>
                        <img
                            className="w-full h-60 object-cover"
                            src={props.myEvents.event_image}
                            alt=""
                        />
                        <div className="card-body">
                            <form
                                onSubmit={(e) => handleSubmit(e)}
                                encType="multipart/form-data"
                                method="POST"
                            >
                                <div className="form-control">
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Event Name"
                                        className="m-2 input input-bordered w-full"
                                        onChange={(title) =>
                                            setTitle(title.target.value)
                                        }
                                        defaultValue={props.myEvents.title}
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        id="description"
                                        type="text"
                                        placeholder="Event Description"
                                        className="m-2 input input-bordered w-full"
                                        onChange={(description) =>
                                            setDescription(
                                                description.target.value
                                            )
                                        }
                                        defaultValue={
                                            props.myEvents.description
                                        }
                                    />
                                </div>
                                <div className="form-control">
                                    <select
                                        id="category"
                                        className="select select-bordered m-2 w-full"
                                        value={selectedCategory}
                                        onChange={(e) =>
                                            setSelectedCategory(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Select a category
                                        </option>
                                        {categoryOptions.map(
                                            (option, index) => (
                                                <option
                                                    key={index}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="form-control">
                                    <select
                                        id="type"
                                        className="select select-bordered m-2 w-full"
                                        value={selectedType}
                                        onChange={(e) =>
                                            setSelectedType(e.target.value)
                                        }
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
                                <div className="form-control">
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="input input-bordered w-full m-2"
                                        min={currentDate}
                                        onChange={(e) =>
                                            setDate(e.target.value)
                                        }
                                    />
                                </div>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="file-input file-input-primary m-2 w-full"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                />
                                <div className="form-control">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-outline m-2 w-full"
                                    >
                                        UPDATE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
