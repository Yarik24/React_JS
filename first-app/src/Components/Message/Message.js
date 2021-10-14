import './style.css'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import addMessage from '../../Action/MessagesActions';

function Message({ chatId }) {

  const messages = useSelector(
    (state) => state.messages.messageList[chatId],
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id0" && messages[messages.length - 1].author !== "Yarik") {
      setTimeout(() => {
        dispatch(
          addMessage(chatId, "Don't write message", "Yarik")
        );
      }, 2000);
    }
  }, [messages]);
  
  return (
     <ul className="messege">
      {messageList
        ? messageList.map((el) => (
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