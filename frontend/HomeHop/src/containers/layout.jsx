import { Outlet } from 'react-router';
import Header from '../components/header';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;