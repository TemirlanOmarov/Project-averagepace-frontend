import { gql, useQuery } from '@apollo/client';
import { Typography } from '@mui/material';

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
export interface RunningItemType {
  id: string;
  duration: number;
  date: string;
  distance: number;
}

export const Lab = () => {
  const { loading, error, data } = useQuery(GET_RUNS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return data.listRuns.map(({ id, duration, date, distance }) => (
    <div key={id}>
      <h3>{id}</h3>
      <h2>{duration}</h2>
      <h3>{date}</h3>
      <h4>{distance}</h4>
    </div>
  ));
};
