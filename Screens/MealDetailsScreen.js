import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';

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
        emptyStarColor={'white'}
        fullStarColor={'yellow'}
        starSize={30}
        disabled={true}
        maxStars={5}
        rating={this.props.mealDetailsRating}
        />
      </View>
    );
  }

  navigateToEdit() {
    Actions.addMeal({
      mealKey: this.props.mealDetailsKey,
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
      backgroundColor: 'black',
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 5,
      right: 5,
      left: 5,
      bottom: 0,
      height: "40%",
      width: "100%",
      resizeMode: 'cover',
    },
    orderText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      top: 260,
    },
    companyText: {
      color: 'white',
      fontSize: 16,
      top: 260,
    },
    dateTimeText: {
      color: 'white',
      fontSize: 16,
      top: 260,
    },
    priceText: {
      color: 'white',
      fontSize: 16,
      top: 260,
    },
    notesText: {
      color: 'white',
      fontSize: 16,
      top: 260,
    },
    starRatingContainer: {
      alignSelf: 'center',
      top: 260,
      width: 200
    },
  });