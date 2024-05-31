import { useState } from 'react';
import { RunningItem } from '../components/RunningItem';
import { data } from '../constants/data';
import { Box, Grid } from '@mui/material';
import { RunForm } from './RunForm';

export const Home = () => {
  const [items, setItems] = useState(data);

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
      <RunForm setItems={setItems} />
    </Box>
  );
};
