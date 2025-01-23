import {NavLink} from 'react-router';

export default function Index() {
    return (
            <nav className="index-nav">
                <NavLink className="index-link" to={"/react-facts"}>React Fragments</NavLink>
            </nav>
    )
}
