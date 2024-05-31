import { ChangeEvent, useState } from 'react';
import { RunningItem } from '../components/RunningItem';
import { data } from '../constants/data';
import { Box, Grid, Stack } from '@mui/material';

export const Home = () => {
  const [items, setItems] = useState(data);
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

  const handleDelete = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Box p={2} bgcolor="#f3f3f3">
      <Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <RunningItem
                key={index}
                item={item}
                onDelete={() => handleDelete(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
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
    </Box>
  );
};
