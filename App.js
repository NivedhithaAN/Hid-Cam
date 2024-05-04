import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Secure from './screens/Secure';
import Opening from './screens/Opening';
import Detected_page from './screens/Detected_page';
import Deactivated from './screens/Deactivated';
import Home from './screens/Home';
import CameraScreen from './screens/CameraScreen';
import Detections from './screens/Detections';
import Current_locations from './screens/Current_locations';
import Complaints from './screens/Complaints';
import Myprofile from './screens/Myprofile';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight, 
  },
});

const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Opening" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Opening" component={Opening} />
          <Stack.Screen name="Secure" component={Secure} />
          <Stack.Screen name="Deactivated" component={Deactivated} />
          <Stack.Screen name="Detected_page" component={Detected_page} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CameraScreen" component={CameraScreen}/>
          <Stack.Screen name="Detections" component={Detections}/>
          <Stack.Screen name="Current_locations" component={Current_locations}/>
          <Stack.Screen name="Complaints" component={Complaints}/>
          <Stack.Screen name="Myprofile" component={Myprofile}/>
         


        </Stack.Navigator>

      </SafeAreaView>
    </NavigationContainer>
  );
} 