import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const AddMealScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add Meal</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
export default AddMealScreen;