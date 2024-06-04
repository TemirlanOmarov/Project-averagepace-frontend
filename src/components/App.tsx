import { RouterProvider } from 'react-router-dom';
import { router } from '../config/router';

export const App = () => {
  return <RouterProvider router={router} />;
};
