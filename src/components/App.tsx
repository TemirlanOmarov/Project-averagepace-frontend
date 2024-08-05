import { RouterProvider } from 'react-router-dom';
import { router } from '../config/router';
import { ApolloProvider } from '@apollo/client';
import { client } from '../config/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
