import React, { useState, useEffect, useRef } from 'react';
import {TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      // You can handle the taken photo here
    }
  };

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={Camera.Constants.Type.back}
        ref={cameraRef}
      />
      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Text style={styles.captureButtonText}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
  },
  captureButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default CameraScreen;
export default CameraScreen;
