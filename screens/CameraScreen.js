import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [smallButtonClicked, setSmallButtonClicked] = useState(false);

  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to Home screen
  };

  const handleSmallButtonPress = () => {
    setSmallButtonClicked(true);
    navigation.navigate('Secure'); // Navigate to Secure screen when small button is clicked
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    let timeout;
    if (hasPermission && !smallButtonClicked) {
      timeout = setTimeout(() => {
        navigation.navigate('Detected_page'); // Navigate to Detected_page
      }, 7000); // 7 seconds delay
    }
    return () => clearTimeout(timeout);
  }, [hasPermission, smallButtonClicked, navigation]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      />
      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Image style={styles.homeIcon} source={require('../assets/home.png')} />
      </TouchableOpacity>
      {/* Small button with text */}
      <TouchableOpacity style={styles.smallButton} onPress={handleSmallButtonPress}>
        <Text style={styles.smallButtonText}>.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20, // Adjust position to the bottom right
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  homeIcon: {
    width: 40,
    height: 40,
  },
  smallButton: {
    position: 'absolute',
    bottom: 20,
    left: 20, // Adjust position to the bottom left
    justifyContent: 'center',
    alignItems: 'center',
      paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  smallButtonText: {
    fontSize: 12,
  },
});
