import './style.css'

function Message(props) {
  console.log(props)
  return (
    <div className="twit">
      <p>{props.first}</p>
    </div>
  );
}
export default Message;