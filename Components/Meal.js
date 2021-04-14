import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window')

export default function Meal({ id, image, order, company, price, dateTime, notes, rating }) {
    return (
      <View>
        <TouchableOpacity 
        // activeOpacity={1}
        style={styles.container}
        onPress={() => Actions.mealDetails({
          mealDetailsKey: id,
          mealDetailsImage: image,
          mealDetailsOrder: order,
          mealDetailsCompany: company,
          mealDetailsPrice: price,
          mealDetailsDateTime: dateTime,
          mealDetailsNotes: notes,
          mealDetailsRating: rating
        })}>
        <Image style={styles.image} source= {image}/>
        <View style={styles.mealDetailsContainer}>
        <Text style={styles.orderText}>{order}</Text>
        <Text style={styles.companyText}>{company}</Text>
        <Text style={styles.dateTimeText}>{dateTime}</Text>
        <StarRating
        containerStyle={styles.starRatingContainer}
        emptyStarColor={'white'}
        fullStarColor={'yellow'}
        starSize={20}
        disabled={true}
        maxStars={5}
        rating={rating}
        />
        </View>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
      container: {
        backgroundColor: 'black',
        marginHorizontal: 0,
        height: 200,
      },
      mealDetailsContainer: {
        paddingLeft: 5,
      },
      image: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        opacity: 0.8,
        top: 5,
        right: 5,
        left: 5,
        bottom: 0,
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
      },
      orderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        top: 90,
      },
      companyText: {
        color: 'white',
        fontSize: 16,
        top: 90,
      },
      dateTimeText: {
        color: 'white',
        fontSize: 16,
        top: 90,
      },
      starRatingContainer: {
        top: 88,
        width: 50
      },
})
