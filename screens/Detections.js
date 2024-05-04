import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.0827, 80.2707]
      },
      properties: {
        title: 'Chennai',
        description: 'Chennai'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.9716,  77.5946]
      },
      properties: {
        title: 'Bengaluru',
        description: 'Bengaluru'
      }
    }
  ]
};

const Detections = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to Home screen
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 30,
          longitudeDelta: 30
        }}
      >
        {geojson.features.map((feature, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: feature.geometry.coordinates[0],
              longitude: feature.geometry.coordinates[1]
            }}
          >
            {/* Use Image component to display custom marker icon */}
            <Image source={require('../assets/camera.png')} style={styles.markerIcon} />
            <Callout>
              <View>
                <Text>{feature.properties.title}</Text>
                <Text>{feature.properties.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {/* Home button */}
      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Image source={require('../assets/home.png')} style={styles.homeButtonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  markerIcon: {
    width: 50,
    height: 50
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  homeButtonIcon: {
    width: 30,
    height: 30,
  },
});

export default Detections;
