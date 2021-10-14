import { ADD_MESSAGE } from "../Store/Types/messagesTypes";

 export const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author,
});

export const botReply = (chatId) => (dispatch) => {
  setTimeout(() => {
    dispatch(
      addMessage(chatId, "Don't write", "Yarik")
    );
  }, 3000);
};