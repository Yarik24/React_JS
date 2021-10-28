import { UPDATE_MESSAGE } from "./Types/messagesTypes";

const initialState = { messageList: null };

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      return { ...state, messageList: action.payload };
    }

    default:
      return state;
  }
}

export default messagesReducer;