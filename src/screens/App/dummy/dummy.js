import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setProductData} from '../../../redux/actions/product-action/product-action';

const Dummy = () => {
  const data = useSelector(state => state.productReducer.saveData);

  useEffect(() => {
    dispatch(setProductData());
  }, []);
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{padding: 10}}>
              <View style={{padding: 10, borderWidth: 1, borderRadius: 8}}>
                <Text>ID: {item?.id}</Text>
                <Text>Title: {item?.title}</Text>
                <Text>Body: {item?.body}</Text>
                {/* <TouchableOpacity style={{backgroundColor: 'red'}}>
                  <Text>Delete</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dummy;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
