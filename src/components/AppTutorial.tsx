import { client } from '../config/client';
import { ApolloProvider } from '@apollo/client';

import { Lab } from './Lab';

export const AppTutorial = () => {
  return (
    <ApolloProvider client={client}>
      <Lab />
    </ApolloProvider>
  );
};
