import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SwitchSelector from 'react-native-switch-selector';
//
import {useSelector} from 'react-redux';
import {AuthHeader} from '../../../components';

const options = [
  {label: 'Posts', value: 'post'},
  {label: 'Photo', value: 'photo'},
];

const ProfilePost = ({navigation}) => {
  const data = useSelector(state => state?.user.signupObject);
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
  //

  const renderHeaderItem = ({item}) => (
    <View style={styles.check}>
      <Image source={item.image} style={styles.checkImg} />
      <View style={styles.details}>
        <View style={styles.dHeader}>
          <Text style={styles.detailText}>{item.name}</Text>
          <Text style={{color: '#BDBDBD'}}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <AuthHeader
          isLeftText
          leftTitle={'Settings'}
          mainTitle={'Profile'}
          rightTitle={'Login'}
          onPressLeft={() => navigation.replace('Login')}
          leftRightTitleStyle={{color: 'white'}}
          mainStyle={{color: 'white'}}
        />
      </View>
      <View style={{padding: 16}}>
        <View>
          <Image
            source={require('../../../assets/Ellipse.png')}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.bodyText}>
          <Text style={styles.detailHText}>Victoria Robertson</Text>
          <Text style={styles.detailText}>A mantra goes here</Text>
        </View>
        <View style={styles.switch}>
          <SwitchSelector
            buttonColor="white"
            selectedColor="#5DB075"
            borderColor="#F6F6F6"
            textColor="#BDBDBD"
            backgroundColor="#F6F6F6"
            fontSize={16}
            fontWeight="600"
            options={options}
            initial={0}
            onPress={() => navigation.navigate('ProfilePhoto')}
          />
        </View>
        <FlatList
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={hotDeals}
          renderItem={renderHeaderItem}
          keyExtractor={(item, index) => item + index.toString()}
        />
        <View>
          <Text>{data.name}</Text>
          <Text>{data.email}</Text>
          <Text>{data.password}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePost;
