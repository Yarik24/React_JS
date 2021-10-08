import './style.css'

function Message({ messageList }) {
  
  return (
     <ul className="messege">
      {messageList ? messageList.map((el) => <li className="messege_item"><p className="messege_item-name">{el.author + " say:"}</p><p className="messege_item-text">{el.text}</p></li>) : null}
    </ul>
  );
}
export default Message;