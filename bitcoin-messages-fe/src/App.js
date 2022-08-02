import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://bitcoin-messages-uq3lf7yjga-uc.a.run.app/latest")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsLoaded(true);
        setMessages(result);
      })
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {messages.map(message => (
          <li key={message.transactionId + message.blockHeight}>
            {message.blockHeight} {message.message}
          </li>
        ))}
      </ul>
    )
  }
}

export default App;
