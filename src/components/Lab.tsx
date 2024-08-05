import { gql, useQuery } from '@apollo/client';

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

export const Lab = () => {
  const { loading, error, data } = useQuery(GET_RUNS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.listRuns.map(({ id, duration, date, distance }) => (
    <div key={id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
      <h3>{id}</h3>
      <p>Duration: {duration}</p>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>Distance: {distance} km</p>
    </div>
  ));
};
