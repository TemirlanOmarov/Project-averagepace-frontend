import { useForm } from 'react-hook-form';
import { RunningItemType } from '../constants/data';
import { gql, useMutation } from '@apollo/client';
import { formatISO } from 'date-fns';
import { LoadingButton } from '@mui/lab';

const UPDATE_RUN = gql`
  mutation UpdateRun(
    $id: String!
    $date: String!
    $distance: Float!
    $duration: Int!
  ) {
    updateRun(id: $id, date: $date, distance: $distance, duration: $duration) {
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

type Inputs = {
  date: string;
  duration: string;
  distance: string;
};

interface FormsubmitProps {
  item: RunningItemType;
  handleClose: () => void;
}

export const Formsubmit = ({ item, handleClose }: FormsubmitProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: item.date.toString(),
      distance: item.distance.toString(),
      duration: item.duration.toString(),
    },
  });

  const [updateRun, { loading }] = useMutation(UPDATE_RUN);

  const handleFormSubmit = (data: Inputs) => {
    // console.log(data);
    updateRun({
      variables: {
        id: item.id,
        duration: Number.parseInt(data.duration),
        distance: Number.parseFloat(data.distance),
        date: formatISO(data.date, { representation: 'complete' }),
      },
      onCompleted() {
        handleClose();
      },
    });
  };
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
      <LoadingButton
        color="success"
        variant="contained"
        type="submit"
        loading={loading}
        // disabled={loading}
      >
        Update item
      </LoadingButton>
    </form>
  );
};
