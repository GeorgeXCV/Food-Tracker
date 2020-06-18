import AsyncStorage from '@react-native-community/async-storage';

export default class Data {

        saveString = async (key, value) => {
            try {
                await AsyncStorage.setItem(key, value)
            } catch (error) {
                console.log('Error storing String: ' + error)
            }
        }
    
        getStringData = async (key) => {
            try {
                const value = await AsyncStorage.getItem(key)
                if (value !== null) {
                    // Display value
                    console.log(value);
                    return value;
                }
                else {
                    throw 'Key not found';
                }
            } catch (error) {
                console.log('Error retrieving string data: ' + error)
            }
        }
        
        saveObject = async (key, value) => {
            try {
                 await AsyncStorage.setItem(key, JSON.stringify(value))
            } catch (error) {
                console.log('Error storing Object: ' + error)
            }
        }
    
        
        getObjectData = async (key) => {
            try {
                const value = await AsyncStorage.getItem(key)
                if (value !== null) {
                    console.log(JSON.parse(value))
                    return value;
                } 
                else {
                    throw 'Failed to get Object Data.'
                }
            } catch (error) {
                console.log('Error retrieving object data: ' + error)
            }
        }

        getAllData = () => {
            AsyncStorage.getAllKeys().then((keys) => {
                return AsyncStorage.multiGet(keys)
                    .then((result) => {
                        console.log(result);
                    }).catch((error) => {
                        console.log(error);
                    });
            })
        }
    }
