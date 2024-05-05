// import React from 'react';
// import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
// import MapView, { Marker, Callout } from 'react-native-maps';
// import { useRoute } from '@react-navigation/native';

// const Detections = () => {
//   const route = useRoute(); // Get the navigation parameters

//   // Get the coordinates from the route parameters
//   const { latitude, longitude, accuracy } = route.params || {};

//   const markers = [
//     {
//       latitude,
//       longitude,
//       accuracy,
//       title: 'Detected Camera',
//       description: `Accuracy: ${accuracy} meters`,
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 20.5937,
//           longitude: 78.9629,
//           latitudeDelta: 30,
//           longitudeDelta: 30,
//         }}
//       >
//         {markers.map((marker, index) => (
//           <Marker
//             key={index}
//             coordinate={{
//               latitude: marker.latitude,
//               longitude: marker.longitude,
//             }}
//           >
//             <Image source={require('../assets/camera.png')} style={styles.markerIcon} />
//             <Callout>
//               <View>
//                 <Text>{marker.title}</Text>
//                 <Text>{marker.description}</Text>
//               </View>
//             </Callout>
//           </Marker>
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   markerIcon: {
//     width: 50,
//     height: 50,
//   },
// });

// export default Detections;

import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

const Detections = () => {
  const route = useRoute(); // Get navigation parameters
  const { latitude, longitude, accuracy } = route.params || {};

  const markers = [];

  // Ensure coordinates are defined and valid numbers
  if (typeof latitude === 'number' && typeof longitude === 'number') {
    markers.push({
      latitude,
      longitude,
      accuracy,
      title: 'Detected Camera',
      description: `Accuracy: ${accuracy} meters`,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          >
            <Image source={require('../assets/camera.png')} style={styles.markerIcon} />
            <Callout>
              <View>
                <Text>{marker.title}</Text>
                <Text>{marker.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerIcon: {
    width: 50,
    height: 50,
  },
});

export default Detections;

