import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MainComponent = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profileImage: require('../assets/default_profile.png'), // Default profile image
  });

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clearing user data from AsyncStorage or logging out from an authentication service
    // Once logged out, you may navigate to the login page
  };

  const handleChoosePhoto = () => {
    // Add logic to allow the user to choose a photo from the device's gallery
  };

  const handleTakePhoto = () => {
    // Add logic to allow the user to take a photo using the device's camera
  };
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };


  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={styles.profileImageContainer}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <TouchableOpacity style={styles.plusButton} onPress={handleChoosePhoto}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.formField}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{user.name}</Text>
      </View>
      <View style={styles.formField}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{user.email}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonCenter}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Image source={require('../assets/home.png')} style={styles.homeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
    marginTop:150
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  plusButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  homeIcon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    marginBottom:250
  },
  buttonCenter: {
    width: '70%',
  },
});

export default MainComponent;
