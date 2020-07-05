import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window')

export default function Meal({ image, order, company, price, dateTime, notes, rating }) {
    return (
      <View>
        <TouchableOpacity 
        style={styles.meal}
        onPress={() => Actions.mealDetails({
          mealDetailsImage: image,
          mealDetailsOrder: order,
          mealDetailsCompany: company,
          mealDetailsPrice: price,
          mealDetailsDateTime: dateTime,
          mealDetailsNotes: notes,
          mealDetailsRating: rating
        })}>
        <Image style={styles.image} source= {image}/>
        <Text style={styles.orderText}>{order}</Text>
        <Text style={styles.companyText}>{company}</Text>
        <Text style={styles.dateTimeText}>{dateTime}</Text>
        <StarRating
        containerStyle={styles.starRatingContainer}
        starSize={20}
        disabled={true}
        maxStars={5}
        rating={rating}
        />
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      meal: {
        // backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 0,
        height: 200
      },
      image: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 5,
        right: 5,
        left: 5,
        bottom: 0,
        height: 200,
        width: 310,
        resizeMode: 'cover',
      },
      orderText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        top: 100,
      },
      companyText: {
        color: '#000000',
        fontSize: 16,
        top: 100,
      },
      dateTimeText: {
        color: '#000000',
        fontSize: 16,
        top: 100,
      },
      starRatingContainer: {
        top: 100,
        width: 50
      },
})
