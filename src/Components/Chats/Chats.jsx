import Chat from '../Chat/Chat';

import './Chats.css';

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you 😃"
        profilePic="https://i.insider.com/5aa029b0ed13922c008b459f?width=700"
        timestamp="35 mins ago"
      />
      <Chat
        name="Ellen"
        message="Whats up ♥?"
        profilePic="https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds"
        timestamp="55 mins ago"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        profilePic="https://economictimes.indiatimes.com/thumb/msid-69737498,width-1200,height-900,resizemode-4,imgsize-493535/sandra-bullock-will-executive-produce-the-series-along-with-john-legend-.jpg?from=mdr"
        timestamp="3 days ago"
      />
      <Chat
        name="Natasha"
        message="Oops there he is ... 🐕‍🦺"
        profilePic="https://i.pinimg.com/736x/47/97/e7/4797e7e337bf21031658e14033c149b1.jpg"
        timestamp="1 week ago"
      />
    </div>
  );
};

export default Chats;
