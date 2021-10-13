import InputForm from "../InputForm/InputForm";
import Message from "../Message/Message";
import { useParams } from "react-router-dom";

function ChatMessages() {
    const { id } = useParams();
    return (
        <>
            <p>chat id {id}</p>
            <Message />
            <InputForm />
        </>
    );
}

export default ChatMessages;