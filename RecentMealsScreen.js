import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';
import Data from './Data';
import { images } from './LocalPhotos';

const data = new Data();

export default class RecentMealsScreen extends Component {
  
  constructor() {
    super();
    this.state={
      imageSource: images.defaultPhoto.uri,
      orderText: '',
      companyText: '',
      dateTimeText: '',
      starCount: 0
    }
  }

  // Retrieve Data
  async retrieveImages() {
    return await data.getObjectData('image')
  }

  async retreiveOrders() {
    return await data.getStringData('order')
  }

  async retreiveCompanies() {
    return await data.getStringData('company')
  }

  async retreiveTimestamps() {
    return await data.getStringData('datetime')
  }

  async retreiveStarRating() {
    return await data.getObjectData('rating')
  }

  componentDidMount() {
    this.retrieveImages()
    .then((value)=> {
      if(value) this.setState({imageSource: JSON.parse(value)})
    })
    this.retreiveOrders()
    .then((value)=> {
      if (value) this.setState({orderText: value})
    })
    this.retreiveCompanies()
    .then((value)=> {
      if(value) this.setState({companyText: value})
    })
    this.retreiveTimestamps()
    .then((value)=> {
      if(value) this.setState({dateTimeText: value})
    })
    this.retreiveStarRating()
    .then((value)=> {
      if(value) this.setState({starCount: JSON.parse(value)})
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source= {this.state.imageSource}/>  
          <Text>{this.state.orderText}</Text>
          <Text>{this.state.companyText}</Text>
          <Text>{this.state.dateTimeText}</Text>
          <StarRating
          containerStyle={styles.starRating}
          starSize={20}
          disabled={true}
          maxStars={5}
          rating={this.state.starCount}
        />
        </View>
    );
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
      // position: 'absolute',
      top: 0,
      bottom: 0,
      height: 150,
      width: 325,
      resizeMode: 'cover',
    },
    starRating: {
      width: 100
    }
  });