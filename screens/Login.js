import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../screens/FirebaseConfig';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to sign in!');
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log('User logged in successfully!');
          setIsLoading(false);
          setEmail('');
          setPassword('');
          navigation.navigate('Logout');
        })
        .catch(error => setErrorMessage(error.message));
    }
  }

  return (
    <View style={styles.container}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => setPassword(val)}
        maxLength={15}
        secureTextEntry={true}
      />   
      <Button
        color="#3740FE"
        title="Sign In"
        onPress={userLogin}
      />   
      <Text 
        style={styles.loginText}
        onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Click here to sign up
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
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

export default Login;
