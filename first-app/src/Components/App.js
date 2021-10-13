import Router from "./Router/Router";


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
  
  return <Router />;
}

export default App;