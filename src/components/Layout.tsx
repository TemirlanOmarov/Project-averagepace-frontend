import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div
      className="layout"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
