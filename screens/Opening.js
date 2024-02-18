import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const opening = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('./components/Hidcam.png')}/>
      <Text style={styles.text}>HIDCAM</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default opening

const styles = StyleSheet.create({
    logo: {
      height: 200,
      width:200,
    },
    text: {
      marginTop: 15,
      fontWeight: 'bold',
      fontSize: 45,
      color: '#1e2a9c',
    }
  });