import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === 'Myprofile') {
      navigation.navigate('Myprofile');
    } else if (option === 'Detections') {
      navigation.navigate('Detections');
    } else if (option === 'Current_locations') {
      navigation.navigate('Current_locations');
    } else if (option === 'Complaints') {
      navigation.navigate('Complaints');
    }
    // Close sidebar after selecting an option
    setSidebarOpen(false);
  };

  const handleScanPress = () => {
    navigation.navigate('CameraScreen');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Icon to Toggle Sidebar */}
      <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleSidebar}>
        <Image source={require('../assets/hamburger.png')} style={styles.icon} />
      </TouchableOpacity>
      
      {/* Sidebar */}
      {sidebarOpen && (
        <View style={styles.sidebar}>
          {/* App Icon and Name */}
          <View style={styles.appHeader}>
            <Image style={styles.appIcon} source={require('../assets/Hidcam.png')} />
            <Text style={styles.appName}>HIDCAM</Text>
          </View>

          {/* Options */}
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Myprofile' && styles.selectedOption]}
            onPress={() => handleOptionPress('Myprofile')}>
            <Image style={styles.icon} source={require('../assets/user.png')} />
            <Text style={styles.optionText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Detections' && styles.selectedOption]}
            onPress={() => handleOptionPress('Detections')}>
            <Image style={styles.icon} source={require('../assets/map.png')} />
            <Text style={styles.optionText}>Detections</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Current_locations' && styles.selectedOption]}
            onPress={() => handleOptionPress('Current_locations')}>
            <Image style={styles.icon} source={require('../assets/maps-and-flags.png')} />
            <Text style={styles.optionText}>Current Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Complaints' && styles.selectedOption]}
            onPress={() => handleOptionPress('Complaints')}>
            <Image style={styles.icon} source={require('../assets/complain.png')} />
            <Text style={styles.optionText}>My Complaints</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* Content */}
      <View style={styles.content}>
        {!sidebarOpen && ( // Only render the scan button if sidebar is closed
          <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
            <Text style={styles.scanButtonText}>Scan</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  hamburgerIcon: {
    padding: 10,
  },
  sidebar: {
    width: 200,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginLeft: 30,
    color: '#1e2a9c'
  },
  appIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scanButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
