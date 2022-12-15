import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setProductData} from '../../../redux/actions';

const Dummy = ({navigation}) => {
  const {saveData} = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductData());
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={{padding: 16}}>
        <View style={{padding: 10, borderWidth: 1, borderRadius: 8}}>
          <Text>ID: {item?.id}</Text>
          <Text>Title: {item?.title}</Text>
          <Text>Body: {item?.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={saveData}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DummyProduct');
        }}>
        <View style={styles.submit}>
          <Text style={styles.loginButton}>CURD With Firebase</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AsyncStorageData');
        }}>
        <View style={styles.submit}>
          <Text style={styles.loginButton}>Data with AsyncStorage</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Country');
        }}>
        <View style={styles.submit}>
          <Text style={styles.loginButton}>Country with City</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Dummy;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  submit: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
    borderRadius: 100,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  loginButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
