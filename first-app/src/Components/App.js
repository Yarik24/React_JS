import Message from "./Message/Message";


function App() {
  const messageText = "Hello, world! It's my first props!";
  return (
    <div className="App">
      <Message first={messageText} />
    </div>
  );
}

export default App;
