import React from "react";

const Description = () => {
    return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="flex-1 px-6">
                <h3 className="text-5xl font-bold text-slate-900">
                    Stmik Bandung University Events
                </h3>
                <p className="py-6 text-slate-900">
                    At our event-centric website, we bring together a vibrant
                    community of event organizers and enthusiasts. Explore a
                    world of endless possibilities, where you can find and
                    register for events that match your preferences. From
                    networking opportunities and professional development
                    seminars to cultural celebrations and sporting events, our
                    platform is your gateway to an enriching event landscape.
                </p>
            </div>
            <div className="flex-1 text-right px-4">
                <img
                    src="/build/assets/images-base/desc-img.png"
                    alt=""
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Description;
