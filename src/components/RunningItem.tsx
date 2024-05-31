import { format } from 'date-fns';
import { RunningItemType } from '../constants/data';
import { calculateAveragePace } from '../utils/calculateAveragePace';
import { formatDistance } from '../utils/formatDistance';
import { ru } from 'date-fns/locale';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

interface RunningItemProps {
  item: RunningItemType;
  onDelete: () => void;
}

export const RunningItem = ({ item, onDelete }: RunningItemProps) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography>
              Date:{' '}
              {format(new Date(item.date), 'PP', {
                locale: ru,
              })}
            </Typography>
            <Typography>Distance: {formatDistance(item.distance)}</Typography>
            <Typography>Duration: {item.duration}</Typography>
            <Typography>
              Average Pace: {calculateAveragePace(item.duration, item.distance)}{' '}
              km
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              justifyContent={{
                sm: 'flex-start',
                md: 'flex-end',
              }}
            >
              <Button onClick={handleDelete} color="error" variant="text">
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
