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
        navigationBarStyle={{backgroundColor: 'black'}}
        title="Recent Meals" titleStyle={{color: 'white' }}
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
          navigationBarStyle={{backgroundColor: 'black'}}
          title="Add Meal" titleStyle={{color: 'white' }}
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
      navigationBarStyle={{backgroundColor: 'black'}}
      title="Meal Details" titleStyle={{color: 'white' }}
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
    navBarButtonText: {
      color: 'rgb(0, 122, 255)',
      textAlign: 'right',
      fontSize: 17,
    },
})
