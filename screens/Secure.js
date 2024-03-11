import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white ',
    padding: 8,
  },
  button:{
    height:40,
    width:40,
    marginTop:140,
    justifyContent: 'center',
    marginLeft: 85
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

const Secure = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    // Navigate to the page with the scan option
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image style={styles.logo} source={require('../assets/Secure.png')} />
    </View>
      <Text style={styles.paragraph}>
       NO CAMERA DETECTED
      </Text>
      <TouchableOpacity style={styles.button}>
        { <Image style={styles.button} source={require('../assets/home.png')} /> }
      </TouchableOpacity>
    </View>
    
  )
}

export default Secure
