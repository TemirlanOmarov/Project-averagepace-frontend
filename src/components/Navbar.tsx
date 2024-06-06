import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav
      style={{
        padding: '16px',
        backgroundColor: 'white',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      <Link to="/">Pace Calculator</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};
