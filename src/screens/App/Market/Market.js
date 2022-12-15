import {
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  FlatList,
  View,
  ScrollView,
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
    <ScrollView>
      <View style={styles.container}>
        <View style={{padding: 16}}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerSText}>Market</Text>
            <TouchableOpacity>
              <Text style={styles.headerText}>Filter</Text>
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
          <Text style={styles.headingText}>Hot deals</Text>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={hotDeals}
            renderItem={renderHeaderItem}
            keyExtractor={(item, index) => item + index.toString()}
          />
          <Text style={styles.headingText}>Trending</Text>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={trending}
            renderItem={renderHeaderItem}
            keyExtractor={(item, index) => item + index.toString()}
          />
          <Text style={styles.headingText}>Deals</Text>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={deals}
            renderItem={renderHeaderItem}
            keyExtractor={(item, index) => item + index.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Market;
