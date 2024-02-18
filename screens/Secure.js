import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const secure = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image style={styles.logo} source={require('./components/secure.jpg')} />
    </View>
      <Text style={styles.paragraph}>
       NO CAMERA DETECTED
      </Text>
    </View>
  )
}

export default secure

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