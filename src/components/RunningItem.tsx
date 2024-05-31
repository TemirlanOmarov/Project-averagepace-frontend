import { format } from 'date-fns';
import { RunningItemType } from '../constants/data';
import { calculateAveragePace } from '../utils/calculateAveragePace';
import { formatDistance } from '../utils/formatDistance';
import { ru } from 'date-fns/locale';

interface RunningItemProps {
  item: RunningItemType;
  onDelete: () => void;
}

export const RunningItem = ({ item, onDelete }: RunningItemProps) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div
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
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
