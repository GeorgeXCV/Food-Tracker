import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { images } from '../LocalPhotos';
import Constants from 'expo-constants';
import { Dropdown } from 'react-native-material-dropdown';
import StarRating from 'react-native-star-rating';
import Data from '../Data';
import { Actions } from 'react-native-router-flux';
import 'react-native-get-random-values';
import * as Random from 'expo-random';

export default class AddMealScreen extends Component {
  
  constructor() {
    super();
    this.state={
      image: null,
      setImage: null,
      imageSource : images.defaultPhoto.uri,
      orderText: '',
      priceText: '',
      dateTimeText: '',
      notesTextField: '',
      starCount: 3,
      companies: [{
        value: 'Dominos',
      }, {
        value: 'Papa Johns',
      }, {
        value: 'Shake Shack',
      }],
      selectedCompany: ''
    }
  }

  componentDidMount() {
    this.enterEditModeIfRequired();
  }

  enterEditModeIfRequired = () => {
    try {
         if (this.props.mealOrder !== undefined) {
           this.setState({
            imageSource : this.props.mealImage,
            orderText: this.props.mealOrder,
            priceText: this.props.mealPrice,
            dateTimeText: this.props.mealDateTime,
            notesTextField: this.props.mealNotes,
            starCount: this.props.mealRating,
            selectedCompany: this.props.mealCompany
           })
         }
    } catch (error) {
        console.log('Error entering edit mode: ' + error)
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
        value={this.state.orderText} 
        onChangeText={(orderText) => this.setState({orderText})}
        /> 
  
        <Dropdown
        label="Company"
        data={this.state.companies}
        value={this.state.selectedCompany}
        onChangeText={(selectedCompany) => this.setState({selectedCompany})}
        />

       <View style={{flexDirection:"row"}}>
       <TextInput style = {styles.priceTextField} 
        placeholder = "Price"
        value = {this.state.priceText} 
        onChangeText={(priceText) => this.setState({priceText})}
        /> 

        <TextInput style = {styles.dateTimeTextFiled}
        placeholder = "Date/Time"
        value = {this.state.dateTimeText} 
        onChangeText={(dateTimeText) => this.setState({dateTimeText})}
        ></TextInput>

       </View>
        
        <TextInput style = {styles.notesField}
        multiline = {true}
        placeholder = "Notes"
        value = {this.state.notesTextField} 
        onChangeText={(notesTextField) => this.setState({notesTextField})}
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

 // Save 
  saveMeal = async () => {
    try {
      let meal = {
        image: this.state.imageSource,
        orderName: this.state.orderText,
        companyName: this.state.selectedCompany,
        price: this.state.priceText,
        dateTime: this.state.dateTimeText,
        notes: this.state.notesTextField,
        rating: this.state.starCount
      };
      
      if (this.props.mealKey !== undefined) { // If Editing meal, update meal
        await AsyncStorage.mergeItem(this.props.mealKey, JSON.stringify(meal)).then(() => {
          Actions.recentMeals();
        })
      } else { // Otherwise, save as new meal
        const ID = await Random.getRandomBytesAsync(16);
        await AsyncStorage.setItem(ID.toString(), JSON.stringify(meal)).then(() => {
          Actions.recentMeals();
        })
      }
    } catch (error) {
      console.log("Save Meal error: " + error)
    }
 }

 // Star Rating
 onStarRatingPress(rating) {
   this.setState({
     starCount: rating
   });
 }

 // Image Picker Functions
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