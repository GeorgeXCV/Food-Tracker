import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { images } from './LocalPhotos';

export default class AddMealScreen extends Component {

  constructor() {
    super();
    this.state={
      image: null,
      setImage: null,
      imageSource : images.defaultPhoto.uri
    }
  }

  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => this._pickImage()}> 
        <Image style={styles.image} source= {this.state.imageSource}/>     
        <Text style={styles.buttonText}>Add your first meal!</Text>
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      paddingTop: 400,
      height: 312,
      width: 312,
      resizeMode: 'contain',
    }
  });