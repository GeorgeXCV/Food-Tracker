import React, { Component, useRef } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import NewUserScreen from './Screens/NewUserScreen';
import AddMealScreen from './Screens/AddMealScreen';
import RecentMealsScreen from './Screens/RecentMealsScreen';

export default function FoodTrackerApp() {
  
  const _AddMealScreen = useRef();

  return (
    <Router>
      <Scene key="root">
        <Scene key="newUser" 
        component={NewUserScreen} 
        title="Food Tracker App" 
        // initial 
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
      </Scene>
     
    </Router>
  );
}