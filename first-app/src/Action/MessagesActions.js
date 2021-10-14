import { UPDATE_MESSAGE } from "../Store/Types/messagesTypes";

export const updateMessages = (data) => ({
  type: UPDATE_MESSAGE,
  payload: data,
});

export const botReply = (chatId) => (dispatch) => {
  setTimeout(() => {
    dispatch(
      addMessage(chatId, "Attentin!", "Yarik")
    );
  }, 3000);
};

export const getMessages = () => async (dispatch) => {
  const responce = await fetch(`http://localhost:3001/messages`);
  const data = await responce.json();
  dispatch(updateMessages(data));
};

export const addMessage = (chatId, text, author) => async (dispatch) => {
  const responce = await fetch(`http://localhost:3001/messages`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ chatId, text, author }),
  });
  const data = await responce.json();
  dispatch(updateMessages(data));
};