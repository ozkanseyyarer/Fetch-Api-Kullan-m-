import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function User({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={{uri: data.image}} style={styles.image} />
      </View>
      <View style={styles.container3}>
        <Text style={styles.name}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
      <View style={styles.container4}>
        <View style={styles.agecontainer}>
          <Text style={styles.age}>{data.age}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  age: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  agecontainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7BA6BD',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  email: {
    fontSize: 13,
    fontWeight: '400',
    color: 'gray',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'black',
  },
  container: {
    width: width * 0.9,
    alignSelf: 'center',
    height: 80,
    padding: 5,
    flexDirection: 'row',
    margin: 3,
    borderRadius: 5,
  },

  container2: {
    flex: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 5,
    justifyContent: 'center',
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
