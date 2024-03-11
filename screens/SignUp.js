import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../screens/FirebaseConfig';

const SignUp = ({ navigation }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateInputVal = (val, prop) => {
    switch(prop) {
      case 'displayName':
        setDisplayName(val);
        break;
      case 'email':
        setEmail(val);
        break;
      case 'password':
        setPassword(val);
        break;
      default:
        break;
    }
  }

  const registerUser = () => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to sign up!');
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({
            displayName: displayName
          });
          console.log('User registered successfully!');
          setIsLoading(false);
          setDisplayName('');
          setEmail('');
          setPassword('');
          navigation.navigate('Login');
        })
        .catch(error => setErrorMessage(error.message));
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={displayName}
        onChangeText={(val) => updateInputVal(val, 'displayName')}
      />      
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => updateInputVal(val, 'email')}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => updateInputVal(val, 'password')}
        maxLength={15}
        secureTextEntry={true}
      />   
      <Button
        color="#3740FE"
        title="SignUp"
        onPress={registerUser}
      />
      <Text 
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already Registered? Click here to login
      </Text>
      {isLoading &&
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      }
      {errorMessage !== '' &&
        <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default SignUp;
