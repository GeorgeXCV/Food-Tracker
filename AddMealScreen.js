import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Dropdown } from 'react-native-material-dropdown';
import { images } from './LocalPhotos';

export default class AddMealScreen extends Component {

  constructor() {
    super();
    this.state={
      image: null,
      setImage: null,
      imageSource : images.defaultPhoto.uri,
      orderText: null,
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
        
        <TextInput style = {styles.textField} 
        placeholder = "Order"
        onChangeText={(orderText) => this.setState({orderText})}
        /> 

        <Dropdown
        label="Company"
        data={this.state.companies}
        />

        </TouchableOpacity>
        </View>
    );
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
      height: 312,
      width: 312,
      resizeMode: 'contain',
    },
    textField: {
      marginBottom: 10,
      height: 40,
      width: 320,
      borderColor: 'grey',
      borderWidth: 1
    }
  });