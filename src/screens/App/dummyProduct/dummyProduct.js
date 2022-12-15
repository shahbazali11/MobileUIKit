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
      const response = await database().ref(`todo/${index}`).set({
        value: inputTextValue,
      });
      setInputTextValue('');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleUpdateData = async () => {
    try {
      const response = await database()
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
      <Text style={styles.head}>To Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Any Value"
        value={inputTextValue}
        onChangeText={value => {
          setInputTextValue(value);
        }}
      />
      {!isUpdateData ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            if (inputTextValue <= 0) {
              alert('Please Enter Something');
            } else {
              handleAddData();
            }
          }}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            if (inputTextValue <= 0) {
              alert('Please Enter Something');
            } else {
              handleUpdateData();
            }
          }}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>
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
  );
};

export default DummyProduct;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '90%',
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 10,
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    width: '90%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 80,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
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
