import { runData } from '../runData';
import { RunningItems } from '../components/RunningItem';

export const Home = () => {
  return (
    <div>
      {runData.map((item) => {
        return <RunningItems item={item} />;
      })}
    </div>
  );
};
