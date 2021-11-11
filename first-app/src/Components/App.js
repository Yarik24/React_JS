import { BrowserRouter as Router, Route } from "react-router-dom";
import Chats from "./Chats/Chats";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import ChatMessages from "./ChatMessages/ChatMessages";


function App() {
  // const messageText = "Hello, world! It's my first props!";
  // const [messageList, setMessageList] = useState([{ author: 'Yarik', text: 'Welcom!' }, { author: 'Yarik', text: 'Bay!' }]);

  //  useEffect(() => {
  //   if (messageList[messageList.length - 1].author !== 'Yarik') {
  //     setTimeout(() => {
  //       setMessageList((prev) => [...prev, { author: 'Yarik', text: 'What is hapenning?' }])
  //     }, 3000);
  //   }
  //  }, [messageList]);
  
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route exact path="/chats/:id">
          <ChatMessages />
        </Route>
      </Router>
    </div>
  );
}

export default App;