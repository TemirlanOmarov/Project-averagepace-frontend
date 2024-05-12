import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      style={{
        padding: '16px',
        backgroundColor: 'gray',
        display: 'flex',
        gap: '16px',
      }}
    >
      <Link to="/">TEMIRRUN</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};
