import { Link, useNavigate, useResolvedPath } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBackIos, Forum, Person } from '@mui/icons-material';

import './Header.css';

const Header = () => {
  const { pathname } = useResolvedPath();
  const navigate = useNavigate();

  return (
    <div className="header">
      {pathname === '/' ? (
        <IconButton>
          <Person fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIos fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img className="header__logo" src="/tinder.png" alt="Tinder Logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
