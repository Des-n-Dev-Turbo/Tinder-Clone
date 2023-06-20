import { Outlet } from 'react-router-dom';

import Header from '../Header/header';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
