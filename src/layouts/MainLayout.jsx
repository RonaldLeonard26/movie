import { Navbar } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default MainLayout;
