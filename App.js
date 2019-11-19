import React from 'react';
import {SafeAreaView} from 'react-native';
import UsersList from './src/scenes/users';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './src/services/apollo';

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1}}>
        <UsersList />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
