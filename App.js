import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import NewUserScreen from './NewUserScreen';
import AddMealScreen from './AddMealScreen';

export default function FoodTrackerApp() {
  return (
   <Router>
     <Scene key="root">
      <Scene key="newUser"
      component={NewUserScreen}
      title="Food Tracker"
      initial
      />
      <Scene
        key="addMeal"
        component={AddMealScreen}
        title="Add Meal"
        />
     </Scene>
    </Router>
  );
}