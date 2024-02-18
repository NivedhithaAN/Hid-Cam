import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

import Opening from './screens/Opening';

export default function App() {
  return (
    <View style={styles.container}>
        <Opening />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    top: -90,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
});
