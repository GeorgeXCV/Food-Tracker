import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import Meal from '../Components/Meal';

export default class MealDetailsScreen extends Component {
  
  constructor() {
    super();
  }

  render() {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source= {this.props.mealDetailsImage}/>
        <Text style={styles.orderText}>{this.props.mealDetailsOrder}</Text>
        <Text style={styles.companyText}>{this.props.mealDetailsCompany}</Text>
        <Text style={styles.dateTimeText}>{this.props.mealDetailsDateTime}</Text>
        <Text style={styles.priceText}>{this.props.mealDetailsPrice}</Text>
        <Text style={styles.notesText}>{this.props.mealDetailsNotes}</Text>
        <StarRating
        containerStyle={styles.starRatingContainer}
        starSize={20}
        disabled={true}
        maxStars={5}
        rating={this.props.mealDetailsRating}
        />
      </View>
    );
  }

  navigateToEdit() {
    Actions.addMeal({
      mealImage: this.props.mealDetailsImage,
      mealOrder: this.props.mealDetailsOrder,
      mealCompany: this.props.mealDetailsCompany,
      mealDateTime: this.props.mealDetailsDateTime,
      mealPrice: this.props.mealDetailsPrice,
      mealNotes: this.props.mealDetailsNotes,
      mealRating: this.props.mealDetailsRating
    })
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 5,
      right: 5,
      left: 5,
      bottom: 0,
      height: 250,
      width: 310,
      resizeMode: 'cover',
    },
    orderText: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold',
      top: 260,
    },
    companyText: {
      color: '#000000',
      fontSize: 16,
      top: 260,
    },
    dateTimeText: {
      color: '#000000',
      fontSize: 16,
      top: 260,
    },
    priceText: {
      color: '#000000',
      fontSize: 16,
      top: 260,
    },
    notesText: {
      color: '#000000',
      fontSize: 16,
      top: 260,
    },
    starRatingContainer: {
      top: 230,
      width: 50
    },
  });