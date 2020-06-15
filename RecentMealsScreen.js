import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';

export default class RecentMealsScreen extends Component {
  
  constructor() {
    super();
    this.state={
      blank: null
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>Temp</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });