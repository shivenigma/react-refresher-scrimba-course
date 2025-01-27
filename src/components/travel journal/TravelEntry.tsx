import marker from './marker.png';
import {TravelEntryItem} from './types';
export default function TravelEntry({img, title, country, googleMapsLink, dates, text}: TravelEntryItem ) {
return (
    <article className="travel-entry-item">
        <div className="travel-entry-image">
            <img src={img?.src} alt={img?.alt}/>
        </div>
        <div className="travel-entry-container">
            <div>
                <div className="travel-entry-heading">
                    <img src={marker} alt="marker"/>
                    <span>{country}</span>
                    <a href={googleMapsLink} target="__blank">View on Google Maps</a>
                </div>
                <h1 className="travel-entry-destination">{title}</h1>
            </div>
            <div className="travel-entry-content">
                <p className="travel-entry-date">{dates}</p>
                <p className="travel-entry-text">{text}</p>
            </div>
        </div>
    </article>
)
}
