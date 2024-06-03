import { RouterProvider } from 'react-router-dom';

import { router } from '../config/router';
import { client } from '../config/client';
import { ApolloProvider } from '@apollo/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
