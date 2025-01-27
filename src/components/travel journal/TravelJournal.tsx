import './TravelJournal.css'
import Header from './Header';
import TravelEntry from './TravelEntry';
import data from './travelData'
export default function TravelJournal() {
    return (
        <div className="app-body-travel">
            <Header/>
            <div className="travel-container">
                {data.map(item => {
                    return <TravelEntry
                        img={item.img}
                        title={item.title}
                        country={item.country}
                        googleMapsLink={item.googleMapsLink}
                        dates={item.dates}
                        text={item.text}
                        key={item.id}
                    >
                    </TravelEntry>
                })}
            </div>
        </div>
    )
}
