import { ADD_MESSAGE } from "./Types/MessagesTypes";

const initialState = {
  
  messageList: {
    ["id0"]: [
      {
        id: 0,
        text: "Welcome chat!",
        author: "Yarik",
      },
      {
        id: 1,
        text: "Attention!",
        author: "Yarik",
      },
    ],
  },
};

function MessegesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              id: currentList.length,
              text: action.message,
              author: action.author,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
}

export default MessegesReducer;