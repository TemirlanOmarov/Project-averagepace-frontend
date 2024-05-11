import { RunningItemType } from '../runData';

type RunningItemProps = {
  item: RunningItemType;
};

export const RunningItem = ({ item }: RunningItemProps) => {
  return (
    <div
      key={item.duration}
      style={{
        backgroundColor: 'red',
        marginBottom: '12px',
        padding: '8px',
      }}
    >
      <p>{item.date}</p>
      <p>{item.distance}</p>
      <p>{item.duration}</p>
    </div>
  );
};
