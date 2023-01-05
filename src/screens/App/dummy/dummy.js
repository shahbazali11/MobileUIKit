import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setProductData} from '../../../redux/actions/product-action/product-action';
import {SubmitButton} from '../../../components';

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
      <View style={{marginHorizontal: 16}}>
        <SubmitButton
          buttonText={'CURD With Firebase'}
          onPressButton={() => {
            navigation.navigate('DummyProduct');
          }}
        />
        <SubmitButton
          buttonText={'Data with AsyncStorage'}
          onPressButton={() => {
            navigation.navigate('AsyncStorageData');
          }}
        />
        <SubmitButton
          buttonText={'Country with City'}
          onPressButton={() => {
            navigation.navigate('Country');
          }}
        />
      </View>
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
