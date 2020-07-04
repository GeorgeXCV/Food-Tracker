import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, AsyncStorage} from 'react-native';
import StarRating from 'react-native-star-rating';
import Meal from '../Components/Meal';

export default class RecentMealsScreen extends Component {
  
  constructor() {
    super();
    this.state={
      meals: [],
      isDataReady: false,
    }
  }

  componentDidMount() {
    this.getAllMeals();
  }

  getAllMeals = async () => {    
    try {
        const data = [];
        let keys = await AsyncStorage.getAllKeys();
        // await AsyncStorage.multiRemove(keys);
        for (let inKey of keys) {
          let obj = await AsyncStorage.getItem(inKey);
          obj = JSON.parse(obj);
          data.push(obj);
      }
      this.setState({
        meals: data
      })
      } catch (error) {
        console.log("Error saving all meals. Error: " + error)
      }
    }

  // Get Meal IDs and display them in list
  render() {
    return (
        <View style={styles.container}>
          <FlatList
          data={this.state.meals}
          renderItem={ ({item}) => 
            <Meal 
            image = {item.image}
            order={item.orderName}
            company={item.companyName} 
            dateTime={item.dateTime} 
            rating = {item.rating}
            />
          }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    itemStyle: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      // position: 'absolute',
      top: 0,
      bottom: 0,
      height: 150,
      width: 325,
      resizeMode: 'cover',
    },
    text: {
      color: '#4F50DC',
      fontSize: 18,
      marginVertical: 20,
      paddingLeft: 10
    },
    starRating: {
      width: 100
    }
  });