import globe from './globe.png'
export default function Header() {
    return (
        <nav className="travel-header">
            <img src={globe} alt="Globe icon"/>
            <h1>My travel journal</h1>
        </nav>
    )
}
