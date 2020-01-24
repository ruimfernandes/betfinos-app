import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {View, Text, StyleSheet} from 'react-native';
import User from './components/user';

const USER_LIST = gql`
  {
    users {
      name
      age
    }
  }
`;

function UsersList() {
  const {loading, error, data} = useQuery(USER_LIST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>>Error :(</Text>;

  return (
    <View style={styles.container}>
      <Text>Hey</Text>

      {data.users.map(userData => (
        <User data={userData} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UsersList;
