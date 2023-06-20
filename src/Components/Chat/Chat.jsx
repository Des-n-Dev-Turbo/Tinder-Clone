/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

import './Chat.css';

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar src={profilePic} alt={name} className="chat__image" />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
