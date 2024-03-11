import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    backgroundColor: 'white'
  },
  text: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 45,
    color: '#1e2a9c',
    textAlign: 'center'
  }
});

const Opening = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the secure page after 5 seconds
      navigation.replace('Home');
    }, 5000); // 5000 milliseconds = 5 secondss

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.logo} source={require('../assets/Hidcam.png')} />
        <Text style={styles.text}>HIDCAM</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Opening;
