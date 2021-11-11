import './style.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { botReply } from "..//..//Action/messagesActions";

function Message({ chatId, messages }) {

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id0" && messages[messages.length - 1].author !== "Yarik") {
      dispatch(botReply(chatId));
    }
  }, [messages]);
  
  return (
     <ul className="messege">
      {messages
        ? messages.map((el) => (
             <li key = {el.id} className="messege_item">
                <p className="messege_item-name">{el.author + " say:"}</p>
                <p className="messege_item-text">{el.text}</p>
             </li>
        ))
        : null}
     </ul>
  );
}
export default Message;