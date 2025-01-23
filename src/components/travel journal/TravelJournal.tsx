import './TravelJournal.css'
import Header from './Header';
import TravelEntry from './TravelEntry';

export default function TravelJournal() {
    return (
        <div className="app-body-travel">
            <Header/>
            <div className="travel-container">
                <TravelEntry/>
                <TravelEntry/>
                <TravelEntry/>
            </div>
        </div>
    )
}
