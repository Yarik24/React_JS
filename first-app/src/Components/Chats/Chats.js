import { List, ListItem, Button, Dialog, DialogTitle, TextField } from '@material-ui/core';
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import "./ChatStyle.css";
import { addChat, deleteChat } from "../../Action/chatsActions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getMessages } from '../../Action/messagesActions';

function Chats() {

    document.title = "Chats";
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const chats = useSelector((state) => state.chats.chatList, shallowEqual);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (!chats) {
        dispatch(getChats());
      }
    }, [chats]);

    useEffect(() => {
      dispatch(getMessages());
    });

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
    };
    const handleDelete = (id) => {
    dispatch(deleteChat(id));
    };

    return (
        <>
            <Header />
            <div>
                <List
                 sx={{
                  width: "100%",
                  maxWidth: 300,
                    }}
                >
                 {chats
                    ? chats.map((el) => (
                        <div className="conteiner" key={el.id}>
                            <ListItem
                               sx={{
                               mr: "10px",
                               bgcolor: "#8feb34",
                               fontWeight: "bold",
                               border: "2px solid green",
                               mr: "10px"
                              }} 
                            > 
                             <Link to={`/chats/${el.id}`}>{el.name}</Link>
                            </ListItem>
                            <button
                              className="delete-chat"
                              title="Delete chat"
                              onClick={() => handleDelete(el.id)}
                            >
                             X
                            </button>
                        </div>
                       )) 
                    : null}
                </List>
                <Button className="add-chat" onClick={handleOpen}>
                  Add chat
                </Button>
            </div>
            <Dialog open={visible} onClose={handleClose}>
              <DialogTitle>Enter the name of the new chat </DialogTitle>
              <TextField value={newChatName} onChange={handleChange} />
              <Button onClick={onAddChat} disabled={!newChatName}>
                 Submit
              </Button>
            </Dialog>
        </>                               
    );
}

export default Chats;