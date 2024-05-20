import { ChangeEvent, useState } from 'react';
import { RunningItem } from '../components/RunningItem';
import { data } from '../constants/data';

export const Home = () => {
  const [items, setItems] = useState(data);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handleClick = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        duration: +duration,
        date,
        distance: +distance,
      },
    ]);
    setDistance('');
    setDuration('');
    setDate('');
  };
  const handleDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDate(target?.value);
  };
  const handleDistance = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDistance(target?.value);
  };
  const handelDuration = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDuration(target?.value);
  };

  return (
    <div>
      {items.map((item) => {
        return <RunningItem item={item} />;
      })}
      <div>
        <label htmlFor="date">Date:</label>
        <input id="date" value={date} onChange={handleDate} />
      </div>
      <div>
        <label htmlFor="distance">distance:</label>
        <input
          id="distance"
          type="number"
          value={distance}
          onChange={handleDistance}
        />
      </div>
      <div>
        <label htmlFor="duration">duration:</label>
        <input id="duration" value={duration} onChange={handelDuration} />
      </div>
      <button onClick={handleClick}>Create item</button>
    </div>
  );
};
