import marker from './marker.png';

export default function TravelEntry() {
return (
    <article className="travel-entry-item">
        <div className="travel-entry-image">
            <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Japan"/>
        </div>
        <div className="travel-entry-container">
            <div>
                <div className="travel-entry-heading">
                    <img src={marker} alt="marker"/>
                    <span>Japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="travel-entry-destination">Mount Fuji</h1>
            </div>
            <div className="travel-entry-content">
                <p className="travel-entry-date">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="travel-entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    </article>
)
}
