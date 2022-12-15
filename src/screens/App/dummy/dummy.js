import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setProductData} from '../../../redux/actions/product-action/product-action';

const Dummy = ({navigation}) => {
  const data = useSelector(state => state?.product?.saveData);

  const dispatch = useDispatch();
  function handleNavigation(screenName) {
    navigation.navigate(screenName);
  }
  useEffect(() => {
    dispatch(setProductData());
    data;
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{padding: 16}}>
              <View style={{padding: 10, borderWidth: 1, borderRadius: 8}}>
                <Text>ID: {item?.id}</Text>
                <Text>Title: {item?.title}</Text>
                <Text>Body: {item?.body}</Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          handleNavigation('DummyProduct');
        }}>
        <View style={styles.submit}>
          <Text style={styles.LoginButton}>CURD With Firebase</Text>
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
  },
  LoginButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
