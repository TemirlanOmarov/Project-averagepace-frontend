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
  const handleDuration = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDuration(target?.value);
  };

  const handleDelete = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <RunningItem
          key={index}
          item={item}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <div>
        <div>
          <label htmlFor="date">Date:</label>
          <input id="date" type="date" value={date} onChange={handleDate} />
        </div>
        <div>
          <label htmlFor="distance">Distance:</label>
          <input
            id="distance"
            type="number"
            value={distance}
            onChange={handleDistance}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={handleDuration}
          />
        </div>
        <button onClick={handleClick}>Create item</button>
      </div>
    </div>
  );
};
