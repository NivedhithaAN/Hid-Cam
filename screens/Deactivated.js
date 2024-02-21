import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white ',
    padding: 8,
  },
imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'green',
  },
logo: {
    height: 243,
    width: 220,
  },
});

const Deact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image style={styles.logo} source={require('../assets/deactivated.png')} />
    </View>
      <Text style={styles.paragraph}>
       NO CAMERA DETECTED
      </Text>
    </View>
  )
}

export default Deact
