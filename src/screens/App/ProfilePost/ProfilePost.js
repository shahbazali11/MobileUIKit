import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SwitchSelector from 'react-native-switch-selector';
const options = [
  {label: 'Posts', value: 'post'},
  {label: 'Photo', value: 'photo'},
];

const ProfilePost = () => {
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
    <View style={styles.main}>
      <View style={styles.head}>
        <View style={styles.hearder}>
          <TouchableOpacity>
            <Text style={styles.headerText}>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.headerpProfileText}>Profile</Text>
          <TouchableOpacity>
            <Text style={styles.headerText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require('../../../assets/BlogImage.png')}
          style={styles.profilePic}
        />
      </View>
      <View style={styles.bodyText}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          Victoria Robertson
        </Text>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
          A mantra goes here
        </Text>
      </View>
      <View style={styles.switch}>
        <SwitchSelector
          options={options}
          initial={0}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
        {/* <Text>Posts</Text>
        <Text>Photos</Text>
        <View style={styles.switchSelector}></View> */}
      </View>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={hotDeals}
        renderItem={renderHeaderItem}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default ProfilePost;
