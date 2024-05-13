import { useState } from 'react';

export const Lab = () => {
  const [friends] = useState(['Bex', 'Temir']);

  return (
    <div>
      {friends.map((friend, index) => {
        return (
          <div key={index}>
            <p>{friend}</p>
          </div>
        );
      })}
    </div>
  );
};
