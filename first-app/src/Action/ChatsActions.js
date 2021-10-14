import { ADD_CHAT, DELETE_CHAT } from "../Store/Types/chatsTypes";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});