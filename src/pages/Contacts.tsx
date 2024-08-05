import { useState } from 'react';

export const Contacts = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (t: string) => setPassword(t);
  const handleClick2 = (t: string) => setLogin(t);

  const logCredentials = () => {
    localStorage.setItem('TEST', JSON.stringify({ username: login, password }));
    console.log({ username: login, password });
  };

  return (
    <div style={{ padding: '20px' }}>
      <p>Phone number: 444-444</p>
      <input
        type="text"
        value={login}
        placeholder="Login"
        onChange={(e) => handleClick2(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => handleClick(e.target.value)}
      />
      <button onClick={logCredentials} style={{ marginLeft: '10px' }}>
        Login
      </button>
    </div>
  );
};
