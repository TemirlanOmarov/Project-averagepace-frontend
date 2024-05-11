import { Link } from 'react-router-dom';
import { runData } from '../runData';
import { RunningItem } from '../components/RunningItem';

export const Home = () => {
  return (
    <div>
      <Link to="/contacts">Contacts</Link>

      {runData.map((item) => {
        return <RunningItem item={item} />;
      })}
    </div>
  );
};
