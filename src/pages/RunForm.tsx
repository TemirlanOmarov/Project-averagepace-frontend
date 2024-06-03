import { RunningItemType } from '../constants/data';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

type Inputs = {
  date: string;
  distance: string;
  duration: string;
};

export const RunForm = ({
  setItems,
}: {
  setItems: (value: React.SetStateAction<RunningItemType[]>) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: '',
      distance: '',
      duration: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    setItems((prevItems) => [
      ...prevItems,
      {
        duration: +data.duration,
        date: data.date,
        distance: +data.distance,
      },
    ]);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          {...register('date', { required: true })}
        />
        {errors.date && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="distance">Distance:</label>
        <input
          id="distance"
          type="number"
          {...register('distance', {
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 100,
              message: 'Min 100 m',
            },
            max: {
              value: 100000,
              message: 'Max 100,000 m',
            },
          })}
        />
        {errors.distance && <span>{errors.distance.message}</span>}
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          id="duration"
          type="number"
          {...register('duration', { required: true })}
        />
        {errors.duration && <span>This field is required</span>}
      </div>

      <Button
        type="submit"
        variant="contained"
        size="small"
        sx={{
          mt: 1,
        }}
      >
        Create item
      </Button>
    </form>
  );
};
