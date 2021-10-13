import { BrowserRouter, Route } from "react-router-dom";
import ChatMesseges from "../ChatMesseges/ChatMesseges";
import Chats from "../Chats/Chats";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";


function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Header}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/chats">
        <Chats />
      </Route>
      <Route exact path="/chats/:id">
        <ChatMesseges />
      </Route>
    </BrowserRouter>
  );
}

export default Router;