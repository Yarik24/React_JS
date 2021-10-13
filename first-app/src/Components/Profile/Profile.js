import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setName } from "../../Action/ProfileActions";

function Profile() {
  const name = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setName(value));
    setValue("");
  }

  return (
   <>
      <Header />
      <div>
        <h4>Profile</h4>
      </div>
      <div>{name}</div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={submitHandler}>Chenge name</button>
      </div>
    </>
  );
}

export default Profile;