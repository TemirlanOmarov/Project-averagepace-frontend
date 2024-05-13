import { RunningItem } from '../components/RunningItem';
import { data } from '../constants/data';

export const Home = () => {
  return (
    <div>
      {data.map((item) => {
        return <RunningItem item={item} />;
      })}
    </div>
  );
};
