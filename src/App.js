import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Message from './Message';
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{}])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  // useEffect(() => {
  //   setUsername(prompt('Please Enter Your Name: '))
  // }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  // Map loops through and displays the messages on the page

  return (
    <div className="App">
      <h1>Messenger Clone</h1>
      <h2>React.js and Firebase</h2>
      <p>Welcome {username}</p>

      <form>
        <FormControl>
          <InputLabel>Enter a message..</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button variant="contained" color="primary" disabled={!input} onClick={sendMessage} type="submit">Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        )
        )
      }

    </div>
  );
}

export default App;
