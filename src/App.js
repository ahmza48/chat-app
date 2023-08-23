import { useEffect, useState } from "react";
import "./App.css";
import { Button, FormHelperText, Input, InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import Message from "./Components/Message";
import db from "./firebase";
import firebase from 'firebase/compat/app';
import FlipMove from "react-flip-move";
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';




function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
    event.preventDefault(); //this will prevent the page from refreshing, as default behaviour of form is that it refreshes the page
    // setMessages([...messages, { username: username, message: input }]);
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");

  };
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })
  }, [])
  
  useEffect(() => {
    let name = "";
    while (!name) {
      name = prompt("Please Enter Your Name: ");
    }
    setUsername(name);
    // setUsername(prompt("Please Enter Your Name: "));
  }, []);

  return (
    <div className="App">
      <h1>My Messenging App</h1>
      <h2>Hello {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a Message</InputLabel>
          <Input
            className="app__input"
            type="text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton>
          {/* <Button
            disabled={!input}
            variant="contained"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button> */}
        </FormControl>
        {/* <input type="text" value={input} onChange={(event)=>{setInput(event.target.value)}} /> */}
      </form>
      {/* messages */}
      {/* input */}
      {/* send button */}
      
      <FlipMove>
        {messages.map(({id, message}) => {
          return username && <Message key={id} username={username} message={message} />;
        })}  
      </FlipMove>

    </div>
  );
}

export default App;
