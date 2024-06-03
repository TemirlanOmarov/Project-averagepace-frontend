import { useState } from 'react';
import { RunningItem } from '../components/RunningItem';
import { RunningItemType, data } from '../constants/data';
import { Box, Grid } from '@mui/material';
import { RunForm } from './RunForm';

export const Home = () => {
  const [items, setItems] = useState(data);

  const handleDelete = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleUpdate = (index: number, updatedItem: RunningItemType) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? updatedItem : item)),
    );
  };

  return (
    <Box p={2} bgcolor="#f3f3f3">
      <Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <RunningItem
                item={item}
                onDelete={() => handleDelete(index)}
                onUpdate={handleUpdate}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <RunForm setItems={setItems} />
    </Box>
  );
};
