import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;