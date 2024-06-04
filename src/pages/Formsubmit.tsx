import { useForm } from 'react-hook-form';
import { RunningItemType } from '../constants/data';
import { Button } from '@mui/material';
import { gql, useMutation } from '@apollo/client';

interface FormsubmitProps {
  item: RunningItemType;
}

export const Formsubmit = ({ item }: FormsubmitProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: item.date,
      distance: item.distance,
      duration: item.duration,
    },
  });

  const handleFormSubmit = (data: RunningItemType) => {
    console.log(data);
  };

  const UPDATE_RUN = gql`
    mutation UpdateRun($date: String!, $distance: Float!, $duration: Int!) {
      updateRun(date: $date, distance: $distance, duration: $duration) {
        date
        distance
        duration
      }
    }
  `;
  const [updateRun] = useMutation(UPDATE_RUN);

  function updateItem(id: string) {
    updateRun({ variables: { id } });
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
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
        color="success"
        variant="text"
        onClick={() => updateItem(item.id!)}
      >
        Update item
      </Button>
    </form>
  );
};
