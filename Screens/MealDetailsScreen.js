import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import StarRating from 'react-native-star-rating';
import Meal from '../Components/Meal';

export default class MealDetailsScreen extends Component {
  
  constructor() {
    super();
    this.state={
        text: ''
    }
  }

  render() {
    return (
        <View style={styles.container}>
         <Text>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });