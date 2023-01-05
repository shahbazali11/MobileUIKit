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
import {AppInput, SubmitButton} from '../../../components';

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
      <AppInput
        textValue={inputBoxValue}
        placeholderName={'Enter Data'}
        onTextChange={value => {
          setInputBoxValue(value);
        }}
      />
      {/* <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          addItemToList();
        }}>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity> */}
      <SubmitButton
        buttonText={'Add'}
        onPressButton={() => {
          addItemToList();
        }}
      />
      <Text>Your Data is {storeDataList}</Text>
    </View>
  );
};

const {width} = Dimensions.get('screen');

export default AsyncStorageData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 100,
  },
  button: {color: '#fff'},
});
