import CHANGE_NAME from "./Types/profileTypes";

const InitialState = { name: "No name" };

function ProfileReducer(state = InitialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return { name: payload };
    default:
      return state;
  }
}

export default ProfileReducer;