import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from './styles';
//
import {AppInput, AuthHeader} from '../../../components';

import {FeedHeader} from '../../../components/FeedHeader/FeedHeader';
import Contents from '../Contents/Contents';

const Feed = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    {
      head: 'Dunya News',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Geo',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Geo Sports',
      detail:
        "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: 'timer',
      image: require('../../../assets/my_image.png'),
    },
    {
      head: 'Viral Square Updates',
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
  //
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [masterDataSource, setMasterDataSource] = useState(data);
  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (data) {
        const itemData = data.head ? data.head.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  //
  itemSeprator = navigation => {
    return <View style={styles.seprator} />;
  };

  const renderHeaderItem = ({item}) => (
    <FeedHeader
      head={item.head}
      detail={item.detail}
      source={item.image}
      time={item.time}
    />
  );
  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <AuthHeader
          isLeftText
          leftTitle={'Back'}
          mainTitle={'Feed'}
          rightTitle={'Filter'}
        />
        <AppInput
          inputcontainerStyle={{borderRadius: 50}}
          onTextChange={text => searchFilterFunction(text)}
          textValue={search}
          placeholderName={'Search'}
        />
        <FlatList
          // data={data}
          data={filteredDataSource}
          renderItem={renderHeaderItem}
          keyExtractor={(item, index) => item + index.toString()}
        />
      </View>
    </View>
  );
};

export default Feed;
