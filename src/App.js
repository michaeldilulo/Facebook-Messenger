import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = (event) => {

    setMessages([...messages, input])
    setInput('')

  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <h2>React.js and Firebase</h2>

      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
