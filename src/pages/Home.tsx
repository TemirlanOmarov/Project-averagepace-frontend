import { RunningItem } from '../components/RunningItem';
import { RunningItemType } from '../constants/data';
import { Box, Grid } from '@mui/material';
import { RunForm } from './RunForm';
import { gql, useQuery } from '@apollo/client';

const HomeView = ({ runs }: { runs: RunningItemType[] }) => {
  return (
    <Box p={2} bgcolor="#f3f3f3">
      <Box>
        <Grid container spacing={2}>
          {runs.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <RunningItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box py={2}>
        <RunForm />
      </Box>
    </Box>
  );
};

const GET_RUNS = gql`
  query GetRuns {
    listRuns {
      id
      date
      duration
      durationString
      distance
      distanceString
      averagePace
    }
  }
`;

const HomeQuery = () => {
  const { loading, error, data } = useQuery(GET_RUNS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return <HomeView runs={data.listRuns} />;
};

export const Home = () => {
  return <HomeQuery />;
};
