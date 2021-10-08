import { List, ListItem } from "@material-ui/core";
import { useState } from "react";

function Chats() {

  const [chats, setChats] = useState([{ id: 1, name: "Yarik" }]);

  return (
    <List >
      {chats ? chats.map((el) => <ListItem key={el.id}>{el.name}</ListItem>) : null}
    </List>
  );
}

export default Chats;