import { ADD_MESSAGE } from "../Store/Types/MessagesTypes";

const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author,
});

export default addMessage;