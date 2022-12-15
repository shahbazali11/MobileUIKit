import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AsyncStorageData = () => {
  const [inputBoxValue, setInputBoxValue] = useState('');
  const [storeDataList, setStoreDataList] = useState('');

  const addItemToList = async () => {
    try {
      await AsyncStorage.setItem('itemList', inputBoxValue);
      setInputBoxValue('');

      await getItemList();
      alert('Data is Added');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');
      setStoreDataList(data);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={inputBoxValue}
        placeholder="Enter data"
        onChangeText={value => {
          setInputBoxValue(value);
        }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          addItemToList();
        }}>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>

      <Text>Your Data is {storeDataList}</Text>
    </View>
  );
};

const {width} = Dimensions.get('screen');

export default AsyncStorageData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  addButton: {
    width: width - 20,
    backgroundColor: 'blue',
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 100,
  },
  button: {color: '#fff'},
});
