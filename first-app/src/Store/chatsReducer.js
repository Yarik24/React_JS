import { UPDATE_CHATS } from "./Types/chatsTypes";

const InitialState = { chatList: null };

function chatsReducer(state = InitialState, action) {
  switch (action.type) {
    // case ADD_CHAT:
    //   count++;
    // return {
    //   ...state,
    //   chatList: [
    //     ...state.chatList,
    //     {
    //       id: `id${count}`,
    //       name: action.payload,
    //     },
    //   ],
    // };

    // case DELETE_CHAT:
    //   return {
    //     ...state,
    //     chatList: state.chatList.filter((el) => el.id !== action.payload),
    //   };

    case UPDATE_CHATS:
      return { chatList: action.payload };

    default:
      return state;
  }
}

export default chatsReducer;