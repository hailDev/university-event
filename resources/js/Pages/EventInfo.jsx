import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function Eventinfo(props) {
    const [id, setId] = useState("");
    const [event_author, setEventAuthor] = useState("");
    const [isUserJoined, setIsUserJoined] = useState(props.isUserJoined);
    const [isEventOver, setIsEventOver] = useState(false);
    useEffect(() => {
        setId(props.Eventsinfo.id), setEventAuthor(props.Eventsinfo.author);

        // Memeriksa apakah tanggal acara sudah lewat saat komponen dimuat
        const eventDate = new Date(props.Eventsinfo.date);
        const currentDate = new Date();
        setIsEventOver(eventDate < currentDate);
    }, [props.Eventsinfo.id, props.Eventsinfo.author, props.Eventsinfo.date]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isUserJoined === "on") {
            // Jika sudah terdaftar, tampilkan pesan atau lakukan tindakan lain
            return;
        }

        const data = {
            id,
            event_author,
        };
        Inertia.post("/joinevent", data);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="text-2xl text-center normal-case">Event Detail</div>

            <form onSubmit={handleSubmit}>
                <input
                    id="id"
                    type="hidden"
                    placeholder=""
                    className="m-2 input input-bordered w-full"
                    value={id}
                />
                <input
                    id="event_author"
                    type="hidden"
                    placeholder=""
                    className="m-2 input input-bordered w-full"
                    value={event_author}
                />
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={props.Eventsinfo.event_image}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-5xl font-bold">
                                {props.Eventsinfo.title}
                            </h1>
                            <p className="mt-4">
                                Category : {props.Eventsinfo.category}
                            </p>
                            <p className="mb-4">
                                Date : {props.Eventsinfo.date}
                            </p>
                            <p className="">Description :</p>
                            <p className="">{props.Eventsinfo.description}</p>
                            <div className="py-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={
                                        isUserJoined === "on" || isEventOver
                                    }
                                >
                                    {isUserJoined === "on"
                                        ? "Already Joined"
                                        : isEventOver
                                        ? "Event Over"
                                        : "Join"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
