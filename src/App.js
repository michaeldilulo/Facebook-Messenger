import Button from '@material-ui/core/Button/Button';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = (event) => {
    event.preventDefault();

    setMessages([...messages, input])
    console.log(messages)
    setInput('')

  }
  // Map loops through and displays the messages on the page

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <h2>React.js and Firebase</h2>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button variant="contained" color="primary" disabled={!input} onClick={sendMessage} type="submit">Send Message</Button>
      </form>

      {
        messages.map(message => (
          <p>{message}</p>
        )
        )
      }

    </div>
  );
}

export default App;
