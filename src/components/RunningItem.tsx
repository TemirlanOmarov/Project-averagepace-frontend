import { RunningItem, calculateAveragePace } from '../runData';

interface RunningItemProps {
  item: RunningItem;
}

// 8 may 2024
// 5.19 km
// 31:35
// 6:05 / km

export const RunningItems = ({ item }: RunningItemProps) => {
  return (
    <div
      key={item.duration}
      style={{
        backgroundColor: 'red',
        marginBottom: '12px',
        padding: '8px',
      }}
    >
      <p>Date: {item.date}</p>
      <p>Distance: {item.distance}km</p>
      <p>Duration: {item.duration}</p>
      <p>
        Average Pace: {calculateAveragePace(item.duration, item.distance)} km/h
      </p>
    </div>
  );
};
