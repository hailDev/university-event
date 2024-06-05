const isEventsBanner = (events) => {
    return events.map((data, i) => {
        return (
            <div key={i} className="w-full carousel rounded-box">
                <div className="carousel-item w-full">
                    <img
                        src={data.event_image}
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                    />
                </div>
            </div>
        );
    });
};

const noEvents = () => {
    return <div>Tidak ada event yang tersedia</div>;
};

const slideBannerEvents = ({ events }) => {
    return !events ? noEvents() : isEventsBanner(events);
};

export default slideBannerEvents;
