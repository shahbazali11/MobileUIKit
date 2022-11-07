import {
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  FlatList,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

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

  itemSeprator = () => {
    return <View style={styles.seprator} />;
  };

  const renderHeaderItem = ({item}) => (
    <View style={styles.check}>
      <Image source={item.image} style={styles.checkImg} />
      <View style={styles.details}>
        <View style={styles.dHeader}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            {item.name}
          </Text>
          <Text style={{color: '#BDBDBD'}}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{color: '#5DB075', fontSize: 16}}>Back</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
          Market
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
      <Text style={{fontSize: 24, fontWeight: '500', color: 'black'}}>
        Hot deals
      </Text>
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={hotDeals}
        renderItem={renderHeaderItem}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default Market;
