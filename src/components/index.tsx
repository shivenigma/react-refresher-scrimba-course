import {NavLink} from 'react-router';

export default function Index() {
    return (
            <nav className="index-nav">
                <NavLink className="index-link" to={"/react-facts"}>React Fragments</NavLink>
                <NavLink className="index-link" to={"/travel-journal"}>Travel Journal</NavLink>
                <NavLink className="index-link" to={"/contacts"}>Contacts</NavLink>
                <NavLink className="index-link" to={"/chef-claude"}>Chef Claude</NavLink>
            </nav>
    )
}
