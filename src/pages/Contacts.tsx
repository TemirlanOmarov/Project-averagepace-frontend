import { useState } from 'react';

export const Contacts = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(t: string) {
    setPassword(t);
  }

  function handleClick2(t: string) {
    setLogin(t);
  }

  function logCredentials() {
    localStorage.setItem(
      'TEST',
      JSON.stringify({
        username: login,
        password,
      }),
    );
    console.log({
      username: login,
      password,
    });
  }
  return (
    <div>
      <p>Phone number: 444-444</p>
      <input
        type="text"
        value={login}
        placeholder="Login"
        onChange={(e) => handleClick2(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => handleClick(e.target.value)}
      />

      <button onClick={logCredentials}>Login</button>
    </div>
  );
};
