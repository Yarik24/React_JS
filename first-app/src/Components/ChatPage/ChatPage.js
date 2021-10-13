import InputForm from "../InputForm/InputForm";
import Message from "../Message/Message";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../Header/Header";


function ChatPage() {
    const { chatId } = useParams();
    const currentChat = useSelector(
        (state) => state.chats.chatList.find((el) => el.id === chatId),
        shallowEqual
    );
    return (
        <>
            {currentChat ? (
                <>
                    <Header />
                    <p>{currentChat.name}</p>
                    <Message chatId={chatId} />
                    <InputForm chatId={chatId} />
                </>
            ) : (
                   <Redirect to="/" />    
            )};  
        </>
    );
}

export default ChatPage;