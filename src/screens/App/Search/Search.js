import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from '../Contents/styles';

import {FeedHeader} from '../../../components/FeedHeader/FeedHeader';

const Search = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Header',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
  ]);
  const renderHeaderItem = ({item}) => (
    <FeedHeader
      head={item.head}
      detail={item.detail}
      source={item.image}
      time={item.time}
    />
  );
  const searchfilter = text => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{color: '#5DB075', fontSize: 16}}>Back</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
          Contents
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#5DB075', fontSize: 16}}>Filter</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.inputcontainer}
        onChangeText={setSearch}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search"
        keyboardType="ascii-capable"
      />
      <FlatList
        data={data}
        renderItem={renderHeaderItem}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default Search;
