import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const checkbox = useSelector((state) => state.checkbox);
  const dispatch = useDispatch();

  function handlerCheckbox() {
    dispatch({ type: "SET_CHECKBOX", payload: null });
  }

  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={handlerCheckbox}
      />
    </div>
  );
}

export default Profile;