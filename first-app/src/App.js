import Message from "./Message/Message";
import { useState, useEffect } from "react";
import InputForm from "./InputForm/InputForm";


function App() {
  const messageText = "Hello, world! It's my first props!";
  const [messageList, setMessageList] = useState([{ author: 'Yarik', text: 'Welcom!' }, { author: 'Yarik', text: 'Bay!' }]);

   useEffect(() => {
    if (messageList[messageList.length - 1].author !== 'Yarik') {
      setTimeout(() => {
        setMessageList((prev) => [...prev, { author: 'Yarik', text: 'What is hapenning?' }])
      }, 3000);
    }
   }, [messageList]);
  
  return (
    <div className="App">
      <Message messageList={messageList} />
      <InputForm setMessageList={setMessageList} />
    </div>
  );
}

export default App;