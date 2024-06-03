import { format } from 'date-fns';
import { RunningItemType } from '../constants/data';
import { calculateAveragePace } from '../utils/calculateAveragePace';
import { formatDistance } from '../utils/formatDistance';
import { formatDuration } from '../utils/formatDuraction';
import { ru } from 'date-fns/locale';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Formsubmit } from '../pages/Formsubmit';

interface RunningItemProps {
  item: RunningItemType;
  onDelete: () => void;
  onUpdate: (index: number, updatedItem: RunningItemType) => void;
  index: number;
}

export const RunningItem = ({
  item,
  onDelete,
  onUpdate,
  onSubmit,
  index,
}: RunningItemProps) => {
  const [open, setOpen] = useState(false);

  const handleUpdate = (updatedItem: RunningItemType) => {
    onUpdate(index, updatedItem);
    setOpen(false);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        {open ? (
          <Formsubmit item={item} onSubmit={handleUpdate} />
        ) : (
          <>
            <Typography>
              Date: {format(new Date(item.date), 'PP', { locale: ru })}
            </Typography>
            <Typography>Distance:{formatDistance(item.distance)}</Typography>
            <Typography>Duration: {formatDuration(item.duration)}</Typography>
            <Typography>
              Average Pace: {calculateAveragePace(item.duration, item.distance)}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button onClick={() => setOpen(!open)} variant="text">
          {open ? 'Cancel' : 'Edit'}
        </Button>
        <Button onClick={onDelete} color="error" variant="text">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
