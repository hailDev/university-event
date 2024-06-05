import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import CommunityLists from "@/Components/Home/CommunityLists";
import Paginator from "@/Components/Home/Paginator";
import Footer from "@/Components/Footer";

export default function Events(props) {
    const permission = props.status;
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <CommunityLists
                    events={props.events.data}
                    status={permission}
                />
            </div>
            <div className="flex justify-center items-center mb-5">
                <Paginator meta={props.events.meta} />
            </div>
            <Footer className="" />
        </div>
    );
}
