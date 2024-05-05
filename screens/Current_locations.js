import React from 'react';
import MapView, { Marker,Callout } from 'react-native-maps';
import { StyleSheet, View , TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const MapComponent = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to Home screen
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          accuracy: null,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Image source={require('../assets/home.png')} style={styles.homeButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;