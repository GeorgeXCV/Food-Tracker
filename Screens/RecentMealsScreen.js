import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, AsyncStorage, Dimensions, Text} from 'react-native';
import Meal from '../Components/Meal';
import { Actions } from 'react-native-router-flux';
import { SwipeListView } from 'react-native-swipe-list-view';

export default class RecentMealsScreen extends Component {
  
  constructor() {
    super();
    this.state={
      meals: [],
      isDataReady: false,
    }
  }

  // Get Data
  componentDidMount() {
    this.getAllMeals();
  }

  getAllMeals = async () => {    
    try {
        const data = [];
        let keys = await AsyncStorage.getAllKeys();
        // await AsyncStorage.multiRemove(keys);
        if (keys.length !== 0) {
          for (let inKey of keys) {
            let obj = await AsyncStorage.getItem(inKey);
            obj = JSON.parse(obj);
            obj["key"] = inKey;
            data.push(obj);
        }
        this.setState({
          meals: data,
          isDataReady: true
        })
      } else {
        this.setState({
          isDataReady: false
        })   
      }
      } catch (error) {
        console.log("Error saving all meals. Error: " + error)
      }
    }

  // Swipe To Delete button
  renderHiddenItem = () => (
    <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>Delete</Text>
            </View>
        </View>
  );

  onSwipeValueChange = async swipeData => {
    const {key, value} = swipeData;

    if (value < -Dimensions.get('window').width) { // If Swiped across the screen fully, then delete
      // Delete meal and then retrieve data again
      await this.deleteMeal(key);
      await this.getAllMeals();
    }
  }

  deleteMeal = async (key) => {
    try {
         await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error deleting Meal: ' + error)
    }
}

  // Get Meal IDs and display them in list
  render() {
  if (this.state.isDataReady === true) {
      return (
        <View style={styles.container}>
          <SwipeListView  
          data={this.state.meals}
          extraData={this.state.meals}
          inverted={true}
          contentContainerStyle={{ // Required for Inverted
            flexGrow: 1, justifyContent: 'flex-end',
          }}
          renderItem={ ({item}) => 
          <View style={styles.container}>
            <Meal 
            id = {item.key} // Database Key, not UI related
            image = {item.image}
            order={item.orderName}
            company={item.companyName} 
            price={item.price}
            dateTime={item.dateTime}
            notes={item.notes} 
            rating = {item.rating}
            />
            </View>         
          }
          disableRightSwipe
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={-Dimensions.get('window').width}
          useNativeDriver={false}
          onSwipeValueChange={this.onSwipeValueChange}
          />
      </View>
    );
    // Intro Screen, if no data found
  } else if (this.state.isDataReady === false) {
      return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.addMeal()}> 
        <Image style={styles.introImage} source={require("../assets/fast-food.png")}/>     
        <Text style={styles.introText}>Add your first meal!</Text>
        </TouchableOpacity>
      </View>
    );
   }
 }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    backTextWhite: {
      color: '#FFF',
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
    introText: {
      color: 'white',
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 24,
      fontWeight: 'bold',
    },
    introImage: {
      alignSelf: 'center',
      width: '100%',
      height: '75%',
      resizeMode: 'contain',
      marginTop: '10%'
    },
  });