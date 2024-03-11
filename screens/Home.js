import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const ScanPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScan = async () => {
    if (hasPermission) {
      // Navigate to the camera screen
      navigation.navigate('CameraScreen'); // Replace with your actual screen name
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.scanButtonText}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scanButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ScanPage;
