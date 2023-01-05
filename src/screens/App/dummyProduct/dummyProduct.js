import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import database from '@react-native-firebase/database';
import {SubmitButton, AppInput} from '../../../components';

const DummyProduct = () => {
  const [inputTextValue, setInputTextValue] = useState(null);
  const [list, setList] = useState(null);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    getDatabase();
  }, []);

  const handleAddData = async () => {
    try {
      const index = list.length;
      await database().ref(`todo/${index}`).set({
        value: inputTextValue,
      });
      setInputTextValue('');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleUpdateData = async () => {
    try {
      await database()
        .ref(`todo/${selectedCardIndex}`)
        .update({value: inputTextValue});
      setIsUpdateData(false);
      setInputTextValue(null);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleCardPress = (cardIndex, cardValue) => {
    try {
      setIsUpdateData(true);
      setSelectedCardIndex(cardIndex);
      setInputTextValue(cardValue);
    } catch (error) {}
  };

  const handleCardLongPress = (cardIndex, cardValue) => {
    try {
      Alert.alert('Alert', `Are you sure to Delete ${cardValue} ?`, [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Ok',
          onPress: async () => {
            try {
              const response = await database()
                .ref(`todo/${cardIndex}`)
                .remove();
              setInputTextValue(null);
              setIsUpdateData(false);
            } catch (err) {
              console.log('Error: ', err);
            }
          },
        },
      ]);
    } catch (error) {}
  };

  const getDatabase = async () => {
    try {
      const data = await database()
        .ref('todo')
        .on('value', tempData => {
          setList(tempData?.val());
        });
    } catch (error) {
      console.log('Error: ', err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.head}>To Do App</Text>
        <AppInput
          placeholderName={'Enter Any Value'}
          textValue={inputTextValue}
          onTextChange={value => {
            setInputTextValue(value);
          }}
        />
        {!isUpdateData ? (
          <SubmitButton
            onPressButton={() => {
              if (inputTextValue <= 0) {
                alert('Please Enter Something');
              } else {
                handleAddData();
              }
            }}
            buttonText={'Add'}
          />
        ) : (
          <SubmitButton
            onPressButton={() => {
              if (inputTextValue <= 0) {
                alert('Please Enter Something');
              } else {
                handleUpdateData();
              }
            }}
            buttonText={'Update'}
          />
        )}
        <View style={styles.textCard}>
          <Text style={styles.head}>TO Do List</Text>
          <FlatList
            data={list}
            renderItem={item => {
              const cardIndex = item.index;
              if (item.item !== null) {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                      handleCardPress(cardIndex, item.item.value);
                    }}
                    onLongPress={() =>
                      handleCardLongPress(cardIndex, item.item.value)
                    }>
                    <Text>{item.item.value}</Text>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DummyProduct;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: 16,
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  textCard: {
    marginVertical: 15,
    width: '90%',
  },
});
