import { createBrowserRouter } from 'react-router-dom';

import Root from '../Components/Root/Root';
import TinderCards from '../Components/TinderCards/TinderCards';
import SwipeButtons from '../Components/SwipeButtons/SwipeButtons';
import Chats from '../Components/Chats/Chats';
import ChatScreen from '../Components/ChatScreen/ChatScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <>
            <TinderCards />
            <SwipeButtons />
          </>
        ),
      },
      {
        path: 'chat',
        element: <Chats />,
      },
      {
        path: 'chat/:person',
        element: <ChatScreen />,
      },
    ],
  },
]);

export default router;
