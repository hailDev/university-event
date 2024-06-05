import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Home/Banner";
import Footer from "@/Components/Home/Footer";
import EventsLists from "@/Components/Home/EventsLists";
import Paginator from "@/Components/Home/Paginator";
import Description from "@/Components/Home/Description";

export default function Home(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Banner />
            <Description />
            <Footer />
        </div>
    );
}
