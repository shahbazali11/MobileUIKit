import {
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  FlatList,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
//
import {AuthHeader, AppInput} from '../../../components';

const Market = () => {
  const [search, setSearch] = useState('');
  const [hotDeals, setHotDeals] = useState([
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
  ]);

  const [trending, setTrending] = useState([
    {
      name: 'Item #1 Name Goes Here',
      price: '$18.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
  ]);

  const [deals, setDeals] = useState([
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
    {
      name: 'Item #1 Name Goes Here',
      price: '$19.99',
      image: require('../../../assets/my_image.png'),
    },
  ]);

  itemSeprator = () => {
    return <View style={styles.seprator} />;
  };

  const renderHeaderItem = ({item}) => (
    <View style={styles.check}>
      <Image source={item.image} style={styles.checkImg} />
      <View style={styles.details}>
        <Text style={{color: 'black'}}>{item.name}</Text>
        <Text style={{color: 'black', fontWeight: '600'}}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 16}}>
        <AuthHeader
          isLeftText
          leftTitle={'Back'}
          mainTitle={'Market'}
          rightTitle={'Filter'}
        />

        <AppInput
          inputcontainerStyle={{borderRadius: 50}}
          onTextChange={text => setSearch(text)}
          textValue={search}
          placeholderName={'Search'}
        />
        <ScrollView style={styles.safeArea}>
          <Text style={styles.headingText}>Hot deals</Text>
          <FlatList
            horizontal
            data={hotDeals}
            renderItem={renderHeaderItem}
            keyExtractor={(item, index) => item + index.toString()}
          />
          <Text style={styles.headingText}>Trending</Text>
          <FlatList
            horizontal
            data={trending}
            renderItem={renderHeaderItem}
            keyExtractor={(item, index) => item + index.toString()}
          />
          <Text style={styles.headingText}>Deals</Text>
          <FlatList
            horizontal
            data={deals}
            renderItem={renderHeaderItem}
            keyExtractor={(item, index) => item + index.toString()}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Market;
