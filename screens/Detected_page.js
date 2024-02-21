import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  const styles = StyleSheet.create({
  button:{
    height:40,
    width:40,
    marginTop:60
    
 },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red'
  },
  logo: {
    height: 200,
    width: 200,
    marginTop:300
   },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderColor:'black',
    borderWidth:0.5,
    backgroundColor:'#bcc7d6'
  },
  
});
export default function AssetExample() {
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/detection.png')} />
      

      <Text style={styles.paragraph}>
        CAMERA DETECTED !
      </Text>
      <Table/>
      <HomeButton/>
    </View>
  )}
  const Table = () => {
  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>X coordinate</Text>
        </View>
        <View style={styles.cell}>
          <Text>Row 1, Column 2</Text>
        </View>
      </View>
      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Y coordinate</Text>
        </View>
        <View style={styles.cell}>
          <Text>Row 2, Column 2</Text>
        </View>
      </View>
      {/* Third Row */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Z coordinate</Text>
        </View>
        <View style={styles.cell}>
          <Text>Row 3, Column 2</Text>
        </View>
      </View>
    </View>
  );
};

const HomeButton = () =>{
  return(
      <TouchableOpacity style={styles.button}>
        { <Image style={styles.button} source={require('../assets/home.png')} /> }
      </TouchableOpacity>
  )
}

