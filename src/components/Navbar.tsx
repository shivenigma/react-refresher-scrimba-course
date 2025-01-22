import reactLogo from '../assets/react.svg'
export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="React Logo"/>
                <span>React Facts</span>
            </nav>
        </header>
    )
}
