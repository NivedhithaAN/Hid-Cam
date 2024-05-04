import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-geolocation/geolocation';

const styles = StyleSheet.create({
  homeButton: {
    position: 'bottom',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop:150
  },
  homeButtonIcon: {
    width: 30,
    height: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#bcc7d6',
  },
  coordinates: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});

export default function AssetExample() {
  const navigation = useNavigation();
  const [coordinates, setCoordinates] = useState({latitude: null, longitude: null});

  useEffect(() => {
    // Fetch device location coordinates
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to Home screen
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/detection.png')} />
      <Text style={styles.paragraph}>CAMERA DETECTED !</Text>
      <Table />
      <Text style={styles.coordinates}>Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}</Text>
      <HomeButton onPress={handleHomePress} />
    </View>
  );
}

const Table = () => {
  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>X coordinate</Text>
        </View>
        <View style={styles.cell}>
          <Text>-1</Text>
        </View>
      </View>
      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Y coordinate</Text>
        </View>
        <View style={styles.cell}>
          <Text>-1</Text>
        </View>
      </View>
      {/* Third Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Z coordinate</Text>
        </View>
        <View style={styles.cell}>
          <Text>-1</Text>
        </View>
      </View>
    </View>
  );
};

const HomeButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={onPress}>
      <Image style={styles.homeButtonIcon} source={require('../assets/home.png')} />
    </TouchableOpacity>
  );
};
