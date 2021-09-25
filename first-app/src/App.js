import Message from "./Components/Message/Message";


function App() {
  const messageText = "Hello, world!";
  return (
    <div className="App">
      <Message first={messageText} />
    </div>
  );
}

export default App;
