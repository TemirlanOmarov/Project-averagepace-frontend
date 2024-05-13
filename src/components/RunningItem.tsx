import { format } from 'date-fns';
import { RunningItemType } from '../constants/data';
import { calculateAveragePace } from '../utils/calculateAveragePace';
import { formatDistance } from '../utils/formatDistance';

import { ru } from 'date-fns/locale';

interface RunningItemProps {
  item: RunningItemType;
}

// 8 may 2024
// 5.19 km
// 31:35
// 6:05 / km

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
      <p>
        Date:{' '}
        {format(new Date(item.date), 'PP', {
          locale: ru,
        })}
      </p>
      <p>Distance: {formatDistance(item.distance)}</p>
      <p>Duration: {item.duration}</p>
      <p>
        Average Pace: {calculateAveragePace(item.duration, item.distance)} km
      </p>
    </div>
  );
};
