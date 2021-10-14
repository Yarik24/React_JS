import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatPage from "../ChatPage/ChatPage";
import Chats from "../Chats/Chats";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import AnimeQuotes from "../AnimeQuotes/AnimeQuotes";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats" component={Chats}></Route>
        <Route exact path="/chats/:chatId" component={ChatPage}></Route>
        <Route exact path="/quotes" component={AnimeQuotes}></Route>
        <Route  path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;