import { useState } from 'react';

import { Avatar } from '@mui/material';

import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image:
        'https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds',
      message: 'Whats up ♥?',
    },
    {
      name: 'Ellen',
      image:
        'https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds',
      message: 'Hows it going!',
    },
    {
      message: 'Hi! How are you Ellen!',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { message: input }]);
    setInput('');
  };

  return (
    <div className="chat-screen">
      <p className="chat-screen__timestamp">YOU MATCHED WITH ELLEN ON 10/11/2022</p>
      {messages?.map((message, i) =>
        message.name ? (
          <div key={message?.name + i} className="chat-screen__message">
            <Avatar src={message?.image} alt={message?.name} className="chat-screen__image" />
            <p className="chat-screen__text">{message?.message}</p>
          </div>
        ) : (
          <div key={message?.name + i} className="chat-screen__message">
            <p className="chat-screen__text-user">{message?.message}</p>
          </div>
        )
      )}

      <form className="chat-screen__input" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-screen__input-field"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chat-screen__input-button" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
