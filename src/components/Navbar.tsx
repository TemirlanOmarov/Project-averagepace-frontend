import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      style={{
        padding: '16px',
        backgroundColor: '#282c34',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Pace Calculator
      </Link>
      <Link to="/contacts" style={{ color: 'white', textDecoration: 'none' }}>
        Contacts
      </Link>
    </nav>
  );
};
