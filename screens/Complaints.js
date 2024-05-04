import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyComplaints = () => {
  const navigation = useNavigation();

  const handlePostComplaint = () => {
    const email = 'thalasserypolice@gmail.com'; // Replace with the email address where complaints will be sent
    const subject = 'Complaint'; // Subject of the email

    const url = `mailto:${email}?subject=${subject}`;

    Linking.openURL(url);
  };

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Submit a Complaint</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePostComplaint}>
        <Text style={styles.buttonText}>Post a Complaint</Text>
      </TouchableOpacity>
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
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
});

export default MyComplaints;
