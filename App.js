import React, { Component, useRef } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import NewUserScreen from './NewUserScreen';
import AddMealScreen from './AddMealScreen';
import RecentMealsScreen from './RecentMealsScreen';

export default function FoodTrackerApp() {
  
  const _AddMealScreen = useRef();

  return (
    <Router>
      <Scene key="root">
        <Scene key="newUser" 
        component={NewUserScreen} 
        title="Food Tracker App" 
        initial 
        />
        <Scene
          key="addMeal"
          component={() => <AddMealScreen ref={_AddMealScreen} />}
          title="Add Meal"
          renderRightButton={() => (
            <View>
              <TouchableOpacity
                onPress={() => _AddMealScreen.current.saveMeal()}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          )}
        />
     <Scene
      key="recentMeals"
      component={RecentMealsScreen}
      title="Recent Meals"
      />
      </Scene>
     
    </Router>
  );
}