// import React, { useState, useEffect } from "react";
// import { Head, Link } from "@inertiajs/react";
// import Navbar from "@/Components/Navbar";
// import Footer from "@/Components/Footer";
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from "@inertiajs/inertia-react";

// export default function EventRegistrars(props) {
//     return (
//         <div className="min-h-screen bg-slate-50">
//             <Head title={props.title} />
//             <Navbar user={props.auth.user} />
//             <div className="mt-5 card lg:card-side max-w-3xl mx-auto bg-base-100 shadow-xl mt-4 flex flex-col md:flex-row">
//                 <figure className="md:w-1/2">
//                     <img
//                         src={props.eventRegistrars[0].event_image}
//                         alt="Movie"
//                         className="w-full h-full"
//                     />
//                 </figure>
//                 <div className="card-body p-4 md:w-1/2 md:flex md:flex-col">
//                     {props.eventRegistrars &&
//                         props.eventRegistrars.length > 0 && (
//                             <>
//                                 <h2 className="card-title">
//                                     {props.eventRegistrars[0].event_title}
//                                 </h2>
//                                 <p className="md:mt-2 md:flex-grow">
//                                     Type: {props.eventRegistrars[0].type}
//                                     <br />
//                                     Category:{" "}
//                                     {props.eventRegistrars[0].category}
//                                 </p>
//                                 <p className=" md:mt-2 md:flex-grow">
//                                     {props.eventRegistrars[0].description}
//                                 </p>
//                                 <p className="mt-2 md:mt-4 md:flex-grow">
//                                     {props.eventRegistrars[0].author}
//                                 </p>
//                             </>
//                         )}
//                     {/* <div className="card-actions justify-end">
//                         <button className="btn btn-primary">Listen</button>
//                     </div> */}
//                 </div>
//             </div>

//             <h2 className="text-center mt-20 mb-2 text-xl">
//                 {props.eventRegistrars[0].event_title} Participants
//             </h2>
//             <div className="flex justify-between items-center mb-4 mr-5">
//                 <div></div>
//                 <InertiaLink
//                     className="bg-green-500 text-white px-4 py-2 rounded-md"
//                     href={route("export.excel", {
//                         id: props.eventRegistrars[0].event_id,
//                     })}
//                 >
//                     <img
//                         src="/build/assets/images-base/icon-excel.png"
//                         width="35"
//                         alt=""
//                     />
//                 </InertiaLink>
//             </div>
//             <div className="overflow-x-auto mb-8 bg-base-100">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>
//                                 {/* <label>
//                                     <input
//                                         type="checkbox"
//                                         className="checkbox"
//                                     />
//                                 </label> */}
//                             </th>
//                             <th>Name</th>
//                             <th>NIM</th>
//                             <th>Email</th>
//                             <th>Joined Date</th>
//                             <th>Action</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {props.eventRegistrars &&
//                             props.eventRegistrars.length > 0 &&
//                             props.eventRegistrars.map((registrar, index) => (
//                                 <tr key={index}>
//                                     <th>
//                                         {/* <label>
//                                             <input
//                                                 type="checkbox"
//                                                 className="checkbox"
//                                             />
//                                         </label> */}
//                                     </th>
//                                     <td>
//                                         <div className="flex items-center space-x-3">
//                                             <div className="avatar">
//                                                 <div className="mask mask-squircle w-12 h-12">
//                                                     <img
//                                                         src={
//                                                             registrar.user_image
//                                                         }
//                                                         alt="Avatar Tailwind CSS Component"
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="font-bold">
//                                                     {registrar.user_name}
//                                                 </div>
//                                                 <div className="text-sm opacity-50">
//                                                     {registrar.country}{" "}
//                                                     {/* Misalnya, Anda bisa mengambil data negara dari database */}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td>{registrar.nim}</td>
//                                     <td>{registrar.email}</td>
//                                     <td>{registrar.created_at}</td>
//                                     <td>
//                                         <Link
//                                             href={route("delete.participant")}
//                                             method="post"
//                                             className="bg-red-500 text-white px-4 py-2 rounded-md"
//                                             data={{ id: registrar.id }}
//                                             as="button"
//                                         >
//                                             Delete
//                                         </Link>
//                                     </td>
//                                     {/* <th>
//                                         <button className="btn btn-ghost btn-xs">
//                                             details
//                                         </button>
//                                     </th> */}
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </table>
//             </div>

//             <Footer className="" />
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function EventRegistrars(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="mt-5 card lg:card-side max-w-3xl mx-auto bg-base-100 shadow-xl mt-4 flex flex-col md:flex-row">
                <figure className="md:w-1/2">
                    <img
                        src={props.eventsData[0].event_image}
                        alt="Movie"
                        className="w-full h-full"
                    />
                </figure>
                <div className="card-body p-4 md:w-1/2 md:flex md:flex-col">
                    {props.eventsData && props.eventsData.length > 0 && (
                        <>
                            <h2 className="card-title">
                                {props.eventsData[0].title}
                            </h2>
                            <p className="md:mt-2 md:flex-grow">
                                Type: {props.eventsData[0].type}
                                <br />
                                Category: {props.eventsData[0].category}
                            </p>
                            <p className=" md:mt-2 md:flex-grow">
                                {props.eventsData[0].description}
                            </p>
                            <p className="mt-2 md:mt-4 md:flex-grow">
                                {props.eventsData[0].author}
                            </p>
                        </>
                    )}

                    {/* Add condition to display "No participants yet" */}

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                </div>
            </div>

            <h2 className="text-center mt-20 mb-2 text-xl">
                {props.eventsData[0].title} Participants
            </h2>
            {/* <div className="flex justify-between items-center mb-4 mr-5">
                <div></div>
                <InertiaLink
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    href={route("export.excel", {
                        id: props.eventRegistrars[0].event_id,
                    })}
                    disabled={
                        !props.eventRegistrars[0].event_id ||
                        props.eventRegistrars[0].event_id.length === 0
                    }
                >
                    <img
                        src="/build/assets/images-base/icon-excel.png"
                        width="35"
                        alt=""
                    />
                </InertiaLink>
            </div> */}
            <div className="flex justify-between items-center mb-4 mr-5">
                <div></div>
                {props.eventRegistrars[0] &&
                props.eventRegistrars[0].event_id ? (
                    <InertiaLink
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                        href={route("export.excel", {
                            id: props.eventRegistrars[0].event_id,
                        })}
                    >
                        <img
                            src="/build/assets/images-base/icon-excel.png"
                            width="35"
                            alt=""
                        />
                    </InertiaLink>
                ) : null}
            </div>
            <div className="overflow-x-auto mb-8 bg-base-100">
                {props.eventRegistrars && props.eventRegistrars.length > 0 ? (
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>NIM</th>
                                <th>Email</th>
                                <th>Joined Date</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.eventRegistrars.map((registrar, index) => (
                                <tr key={index}>
                                    <th>
                                        {/* <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                        </label> */}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={
                                                            registrar.user_image
                                                        }
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {registrar.user_name}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {registrar.country}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{registrar.nim}</td>
                                    <td>{registrar.email}</td>
                                    <td>{registrar.created_at}</td>
                                    <td>
                                        <Link
                                            href={route("delete.participant")}
                                            method="post"
                                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                                            data={{ id: registrar.id }}
                                            as="button"
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No participants yet</p>
                )}
            </div>

            <Footer className="" />
        </div>
    );
}
