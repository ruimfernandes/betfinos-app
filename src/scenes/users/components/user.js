import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class User extends React.Component {
  render() {
    const {age, name} = this.props.data;
    return (
      <View style={styles.container}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
    marginBottom: 10,
  },
});

export default User;
