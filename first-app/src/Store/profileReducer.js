import CHANGE_NAME from "./types/profileTypes";

const InitialState = { name: "No name" };

function profileReducer(state = InitialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return { name: payload };
    default:
      return state;
  }
}

export default profileReducer;