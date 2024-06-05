import { Link, Head } from "@inertiajs/react";

const isEvents = (events, status) => {
    return events.map((data, i) => {
        const isStatusOff = status === "off";
        console.log("cek: ", status);

        return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="w-full h-60 object-cover"
                        src={data.event_image}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {isStatusOff ? (
                            <span>{data.title}</span>
                        ) : (
                            <Link
                                href={route("event.info")}
                                method="get"
                                data={{ id: data.id }}
                                as="button"
                            >
                                {data.title}
                            </Link>
                        )}
                    </h2>
                    <p>Date: {data.date}</p>

                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noEvents = () => {
    return <div>Tidak ada event yang tersedia</div>;
};

const EventsLists = ({ events, status }) => {
    return !events ? noEvents() : isEvents(events, status);
};
export default EventsLists;
