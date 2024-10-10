import { Outlet } from 'react-router';
import Header from './Header';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;