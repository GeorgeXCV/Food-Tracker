import React, { Component } from 'react';
import { StyleSheet, View, FlatList, AsyncStorage, Dimensions, Text} from 'react-native';
import Meal from '../Components/Meal';
import { SwipeListView } from 'react-native-swipe-list-view';

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

  
  renderHiddenItem = () => (
    <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>Delete</Text>
            </View>
        </View>
  );

  // Get Meal IDs and display them in list
  render() {
    return (
        <View style={styles.container}>
          <SwipeListView
          disableRightSwipe
          data={this.state.meals}
          renderItem={ ({item}) => 
            <Meal 
            image = {item.image}
            order={item.orderName}
            company={item.companyName} 
            price={item.price}
            dateTime={item.dateTime}
            notes={item.notes} 
            rating = {item.rating}
            />
          }
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={-Dimensions.get('window').width}
          useNativeDriver={false}
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
    },
    backTextWhite: {
      color: '#FFF',
  },
  rowFront: {
      alignItems: 'center',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      justifyContent: 'center',
      height: 50,
  },
  rowBack: {
      alignItems: 'center',
      backgroundColor: 'red',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
  backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
  },
  backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
  },
  });