// import React from "react";
// import slideBannerEvents from "@/Components/Home/slideBannerEvents";

// const Banner = (events) => {
//     return (
//         <div
//             className="hero min-h-screen bg-base-200"
//             style={{
//                 backgroundImage: 'url("/build/assets/images-base/banner.png")',
//                 height: "50vh",
//             }}
//         >
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content flex-col lg:flex-row">
//                 {/* <slideBannerEvents events={props.events.data} /> */}

//                 <div>
//                     <h1 className="text-5xl font-bold text-neutral-100">
//                         Grand Event!
//                     </h1>
//                     <p className="py-6 text-slate-100">
//                         At our event-centric website, we bring together a
//                         vibrant community of event organizers and enthusiasts.
//                         Explore a world of endless possibilities, where you can
//                         find and register for events that match your
//                         preferences. From networking opportunities and
//                         professional development seminars to cultural
//                         celebrations and sporting events, our platform is your
//                         gateway to an enriching event landscape.
//                     </p>
//                     <button className="btn btn-primary">Get Started</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
import { Link, Head } from "@inertiajs/react";
const slide = "slide";
const Banner = ({ events }) => {
    const eventSlides = events.map((data, i) => (
        <div key={i} id="slide1" className="carousel-item w-full">
            <img
                src={data.event_image}
                className="w-full h-60  object-cover"
                alt=""
            />
        </div>
    ));

    return (
        <div
            className="hero min-h-screen bg-base-200"
            style={{
                backgroundImage: 'url("/build/assets/images-base/banner.png")',
                height: "50vh",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-full carousel rounded-box">{eventSlides}</div>
                <div>
                    <h1 className="text-5xl font-bold text-neutral-100">
                        Grand Event!
                    </h1>
                    <p className="py-6 text-slate-100">
                        At our event-centric website, we bring together a
                        vibrant community of event organizers and enthusiasts.
                        Explore a world of endless possibilities, where you can
                        find and register for events that match your
                        preferences. From networking opportunities and
                        professional development seminars to cultural
                        celebrations and sporting events, our platform is your
                        gateway to an enriching event landscape.
                    </p>
                    <Link href={route("event.lists")}>
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
