import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../Action/userAction";
import "./AuthPageStyle.css";

function AuthPage({ error, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/chats");
    }
  }, [user]);

  function hadlerSubmit(e) {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
  }

  return (
    <div className="auth">
      <form className="auth_form">
        <input
          className="auth_input"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="auth_input"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="auth_btn"
          type="submit"
          onClick={(e) => hadlerSubmit(e)}
        > 
         Authorization
        </button>
      </form>
      {errorFlg && (
        <p className="auth_error">Email or password entered incorrectly.</p>
      )}
    </div>
  );
}

export default AuthPage;