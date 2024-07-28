import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import User from './User';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      fetch('https://dummyjson.com/users')
        .then(resp => resp.json())
        .then(json => {
          //console.log(JSON.stringify(json.users, null, 2));
          return setUsers(json.users);
        })
        .finally(e => setLoading(false));
    })();
  }, []);
  return (
    <View>
      {loading ? (
        <ActivityIndicator size={'large'} color={'red'} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item}) => <User data={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
