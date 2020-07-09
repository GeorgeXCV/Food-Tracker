import React, { Component, useRef } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
        key="recentMeals"
        component={RecentMealsScreen}
        title="Recent Meals"
        initial 
        renderBackButton={()=><View/>}
        renderRightButton={()=> (
          <View>
            <TouchableOpacity
              onPress={() => Actions.addMeal()}
              >
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        )}
        />
        <Scene
          key="addMeal"
          component={AddMealScreen}
          title="Add Meal"
          renderRightButton={() => (
            <View>
              <TouchableOpacity
               onPress={() => Actions.refs.addMeal.saveMeal()}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      <Scene
      key="mealDetails"
      component={MealDetailsScreen}
      title="Meal Details" // Change this to order name?
      renderRightButton={()=> ( // Add Edit logic
        <View>
          <TouchableOpacity
            onPress={() => Actions.refs.mealDetails.navigateToEdit()}
            >
            <Text>Edit</Text>
            </TouchableOpacity>
        </View>
      )}
      />
      </Scene>
    </Router>
  );
 } 
}