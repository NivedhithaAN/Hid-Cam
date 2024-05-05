import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

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
    marginTop: 150
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
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null ,Accuracy: null});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCoordinates({ latitude: location.coords.latitude, longitude: location.coords.longitude, accuracy: location.coords.accuracy, });
    })();
  }, []);

  const handleNavigation = () => {
    navigation.navigate('Detections', { // Navigate with parameters
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      accuracy: coordinates.accuracy,
    });
  };

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to Home screen
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/detection.png')} />
      <Text style={styles.paragraph}>CAMERA DETECTED !</Text>
      <Table coordinates={coordinates} />
      <HomeButton onPress={handleHomePress} />
      <Button  title="Location" onPress={handleNavigation}/>
    </View>
  );
}

const Table = ({ coordinates }) => {
  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Latitude</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.coordinates}>{coordinates.latitude}</Text>
        </View>
      </View>
      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Longitude</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.coordinates}>{coordinates.longitude}</Text>
        </View>
      </View>
      {/* Third Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Accuracy</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.coordinates}>{coordinates.accuracy} meters</Text>
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