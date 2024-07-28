import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserList from './src/FetchApi/UserList';

export default function App() {
  return (
    <View style={styles.container}>
      <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
});
