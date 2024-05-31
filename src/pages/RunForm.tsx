import { ChangeEvent, useState } from 'react';
import { RunningItemType } from '../constants/data';

export const RunForm = ({
  setItems,
}: {
  setItems: (value: React.SetStateAction<RunningItemType[]>) => void;
}) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handleClick = () => {
    console.log({ distance, duration, date });
    // validation
    if (distance === '' || duration === '' || date === '') {
      alert('Some fields are empty!');
      return;
    }

    // create new item (update the list)
    setItems((prevItems) => [
      ...prevItems,
      {
        duration: +duration,
        date,
        distance: +distance,
      },
    ]);

    // reset fields
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

  return (
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
  );
};
