import { IconButton } from '@mui/material';
import { Close, Favorite, FlashOn, Replay, Star } from '@mui/icons-material';

import './SwipeButtons.css';

const SwipeButtons = () => {
  return (
    <div className="swipe-buttons">
      <IconButton className="swipe-buttons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons__left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons__star">
        <Star fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
