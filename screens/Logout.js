import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../screens/FirebaseConfig';

const Logout = ({ navigation }) => {
  const [displayName, setDisplayName] = useState('');
  const [uid, setUid] = useState('');

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setDisplayName(currentUser.displayName);
      setUid(currentUser.uid);
    }
  }, []);

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Login');
    }).catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Hello, {displayName}
      </Text>
      <Button
        color="#3740FE"
        title="Logout"
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});

export default Logout;
