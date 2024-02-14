import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// You can import supported modules from npm
// import { Card } from 'react-native-paper';

// or any files within the Snack
import Detected_page from './Detected_page';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Card> */}
        <Detected_page />
      {/* </Card> */}
    </SafeAreaView>
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
