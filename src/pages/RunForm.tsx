import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import { formatISO } from 'date-fns';
import { GET_RUNS } from './Home';

type Inputs = {
  date: string;
  distance: string;
  duration: string;
};

export const RunForm = () => {
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

  const CREATE_RUN = gql`
    mutation CreateRun($date: String!, $distance: Float!, $duration: Int!) {
      createRun(date: $date, distance: $distance, duration: $duration) {
        id
        date
        duration
        durationString
        distance
        distanceString
        averagePace
      }
    }
  `;

  const [createRun, { loading, error }] = useMutation(CREATE_RUN);
  if (loading) return 'Submitting...';

  if (error) return `Submission error! ${error.message}`;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(
      new Date(data.date).toISOString(),
      +data.distance,
      +data.duration,
    );

    createRun({
      variables: {
        date: formatISO(data.date, { representation: 'complete' }),
        distance: +data.distance,
        duration: +data.duration,
      },
      update(cache, result) {
        cache.updateQuery({ query: GET_RUNS }, (data) => ({
          listRuns: [...data.listRuns, result.data.createRun],
        }));
      },
    });

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
