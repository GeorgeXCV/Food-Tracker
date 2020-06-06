import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Dropdown } from 'react-native-material-dropdown';
import StarRating from 'react-native-star-rating';
import { images } from './LocalPhotos';

export default class AddMealScreen extends Component {

  constructor() {
    super();
    this.state={
      image: null,
      setImage: null,
      imageSource : images.defaultPhoto.uri,
      orderText: null,
      priceText: null,
      starCount: 3,
      companies: [{
        value: 'Dominos',
      }, {
        value: 'Papa Johns',
      }, {
        value: 'Shake Shack',
      }]
    }
  }

  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => this._pickImage()}> 
        <Image style={styles.image} source= {this.state.imageSource}/>    
        </TouchableOpacity>
        
        <TextInput style = {styles.orderTextField} 
        placeholder = "Order"
        onChangeText={(orderText) => this.setState({orderText})}
        /> 

        <Dropdown
        label="Company"
        data={this.state.companies}
        />

       <View style={{flexDirection:"row"}}>
       <TextInput style = {styles.priceTextField} 
        placeholder = "Price"
        onChangeText={(priceText) => this.setState({priceText})}
        /> 

        <TextInput style = {styles.dateTimeTextFiled}
        placeholder = "Date/Time"
        ></TextInput>

       </View>
        
        <TextInput style = {styles.notesField}
        multiline = {true}
        placeholder = "Notes"
        ></TextInput>

        <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />

      
        </View>
    );
 }

 onStarRatingPress(rating) {
   this.setState({
     starCount: rating
   });
 }

 getPermissionAsync = async () => {
   if (Constants.platform.ios) {
     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
     if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
   }
 }

 _pickImage = async () => {
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Images,
     allowsEditing: false,
     quality: 0
   });

   console.log(result);

   if (!result.cancelled) {
     this.setState({ imageSource: result});
   }
 };
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
      height: 200,
      width: 312,
      resizeMode: 'cover',
    },
    orderTextField: {
      marginBottom: 10,
      height: 30,
      width: 320,
      borderColor: 'grey',
      borderWidth: 1
    },
    companyDropdown: {
      marginBottom: 10,
      height: 30,
      width: 320,
      borderColor: 'grey',
      borderWidth: 1
    },
    priceTextField: {
      marginBottom: 10,
      height: 30,
      width: 130,
      borderColor: 'grey',
      borderWidth: 1
    },
    dateTimeTextFiled: {
      marginBottom: 10,
      height: 30,
      width: 190,
      borderColor: 'grey',
      borderWidth: 1
    },
    notesField: {
      marginBottom: 10,
      height: 80,
      width: 320,
      borderColor: 'grey',
      borderWidth: 1
    }
  });