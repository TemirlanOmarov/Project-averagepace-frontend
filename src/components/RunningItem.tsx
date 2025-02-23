import { gql, useMutation } from '@apollo/client';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';
import { Formsubmit } from '../pages/Formsubmit';
import { RunningItemType } from '../constants/data';

const DELETE_RUN = gql`
  mutation DeleteRun($id: String!) {
    deleteRun(id: $id) {
      id
    }
  }
`;

export const RunningItem = ({ item }: { item: RunningItemType }) => {
  const [open, setOpen] = useState(false);
  const [deleteRun, { loading, error }] = useMutation(DELETE_RUN);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  function deleteItem() {
    deleteRun({
      variables: {
        id: item.id,
      },
      update(cache) {
        const normalizedId = cache.identify({ id: item.id, __typename: 'Run' });
        cache.evict({ id: normalizedId });
        cache.gc();
      },
    });
  }

  const handleClose = () => setOpen(false);

  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        {open ? (
          <Formsubmit item={item} handleClose={handleClose} />
        ) : (
          <>
            <Typography>
              Date: {format(new Date(item.date), 'PP', { locale: ru })}
            </Typography>
            <Typography>Distance: {item.distanceString}</Typography>
            <Typography>Duration: {item.durationString}</Typography>
            <Typography>Average Pace: {item.averagePace}</Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button onClick={() => setOpen(!open)} variant="text">
          {open ? 'Cancel' : 'Edit'}
        </Button>
        <Button color="error" variant="text" onClick={deleteItem}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
