import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HeaderStyle.css";
import AuthPage from "../AuthPage/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Action/userAction";

function Header() {

  const [authFlg, setAuthFlg] = useState(false);
  const { user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setAuthFlg(false);
    }
  }, [user]);

  function handlerExit() {
    dispatch(userLogout());
  }
    
    return (
        <header className="header">
            <ul className="header_links">
                <li>
                    <Link style={{ textDecoration: "none" }} to="/profile">Profile</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: "none" }} to="/chats">Chats</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: "none" }} to="/quotes">Anime quotes</Link>
                </li>
            </ul>
            <div className="header_authBtns">
               {!user && <button onClick={() => setAuthFlg(!authFlg)}>Entrance</button>}
               {user && <button onClick={() => handlerExit()}>Exit</button>}
            </div>
            {authFlg && <AuthPage error={error} user={user} />}
        </header>
    );
}

export default Header;