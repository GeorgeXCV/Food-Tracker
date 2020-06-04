import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';


export default function FoodTrackerApp() {
  return (
    <ScrollView>
      <Text style={styles.headerTitleStyle}>Food Tracker</Text> 
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{alert("do something")}}> 
      <Image style={styles.image} source={require("./assets/fast-food.png")}/>     
      <Text style={styles.buttonText}>Add your first meal!</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    paddingTop: 10,
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    paddingTop: 400,
    height: 312,
    width: 312,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonText: {
    textAlign: 'center',
    alignSelf: 'center',
  }
});
