import { useState } from 'react';
import { RunningItem } from '../components/RunningItem';
import { RunningItemType } from '../constants/data';
import { Box, Grid } from '@mui/material';
import { RunForm } from './RunForm';
import { gql, useQuery } from '@apollo/client';

const HomeView = ({ runs }: { runs: RunningItemType[] }) => {
  const [items, setItems] = useState<RunningItemType[]>(runs);

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
      <Box py={2}>
        <RunForm setItems={setItems} />
      </Box>
    </Box>
  );
};

const GET_RUNS = gql`
  query GetRuns {
    listRuns {
      id
      duration
      date
      distance
    }
  }
`;

const HomeQuery = () => {
  export const listRuns = () => {
    const { loading, error, data } = useQuery(GET_RUNS);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error : {error.message}</p>;

    return data.listRuns.map(({ id, duration, date, distance }) => (
      <div key={id}>
        <h3>{id}</h3>
        <h4>{duration}</h4>
        <h2>{date}</h2>
        <h5>{distance}</h5>
      </div>
    ));
  };
  // listRuns
  // loading
  // error

  return <HomeView runs={[]} />;
};

export const Home = () => {
  return <HomeQuery />;
};
