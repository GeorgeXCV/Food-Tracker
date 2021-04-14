import React, { Component, useRef } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import AddMealScreen from './Screens/AddMealScreen';
import RecentMealsScreen from './Screens/RecentMealsScreen';
import MealDetailsScreen from './Screens/MealDetailsScreen';

export default class FoodTrackerApp extends Component {
  
render() {
  return (
    <Router>
      <Scene key="root">
        <Scene
        navigationBarStyle={styles.navBar}
        title="Recent Meals" titleStyle={styles.navBarText}
        key="recentMeals"
        component={RecentMealsScreen}
        initial 
        renderBackButton={()=><View/>}
        renderRightButton={()=> (
          <View>
            <TouchableOpacity
              onPress={() => Actions.addMeal()}
              >
              <Text style={styles.navBarButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
        />
        <Scene
          navigationBarStyle={styles.navBar}
          title="Add Meal" titleStyle={styles.navBarText}
          key="addMeal"
          component={AddMealScreen}
          renderRightButton={() => (
            <View>
              <TouchableOpacity
               onPress={() => Actions.refs.addMeal.saveMeal()}
              >
                <Text style={styles.navBarButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      <Scene
      navigationBarStyle={styles.navBar}
      title="Meal Details" titleStyle={styles.navBarText}
      key="mealDetails" 
      component={MealDetailsScreen}
      renderRightButton={()=> (
        <View>
          <TouchableOpacity
            onPress={() => Actions.refs.mealDetails.navigateToEdit()}
            >
            <Text style={styles.navBarButtonText}>Edit</Text>
            </TouchableOpacity>
        </View>
      )}
      />
      </Scene>
    </Router>
  );
 } 
}

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: 'black',
      borderBottomWidth: 0
    },
    navBarText: {
      color: 'white'
    },
    navBarButtonText: {
      color: 'rgb(0, 122, 255)',
      textAlign: 'right',
      fontSize: 17,
      paddingRight: 10
    },
})
