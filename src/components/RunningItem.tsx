import { format } from 'date-fns';
import { RunningItemType } from '../constants/data';
import { calculateAveragePace } from '../utils/calculateAveragePace';
import { formatDistance } from '../utils/formatDistance';
import { formatDuration } from '../utils/formatDuraction';
import { ru } from 'date-fns/locale';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Formsubmit } from '../pages/Formsubmit';
import { gql, useMutation } from '@apollo/client';

interface RunningItemProps {
  item: RunningItemType;
}
const DELETE_RUN = gql`
  mutation DeleteRun($id: String!) {
    deleteRun(id: $id) {
      id
    }
  }
`;

export const RunningItem = ({ item }: RunningItemProps) => {
  const [open, setOpen] = useState(false);

  const [deleteRun, { loading, error }] = useMutation(DELETE_RUN);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  function deleteItem(id: string) {
    deleteRun({ variables: { id } });
  }

  return (
    <Card variant="outlined">
      <CardContent>
        {open ? (
          <Formsubmit item={item} />
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
        <Button
          color="error"
          variant="text"
          onClick={() => deleteItem(item.id!)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
