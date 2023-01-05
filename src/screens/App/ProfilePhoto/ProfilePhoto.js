import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import SwitchSelector from 'react-native-switch-selector';
//
import {AuthHeader} from '../../../components';

const options = [
  {label: 'Posts', value: 'post'},
  {label: 'Photo', value: 'photo'},
];

const ProfilePhoto = ({navigation}) => {
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
          buttonColor="#FFFFFF"
          selectedColor="#5DB075"
          borderColor="#F6F6F6"
          textColor="#BDBDBD"
          backgroundColor="#F6F6F6"
          fontSize={16}
          fontWeight="600"
          options={options}
          initial={0}
          onPress={() => navigation.navigate('ProfilePost')}
        />
      </View>
      <View>
        <Image
          source={require('../../../assets/Ellipse.png')}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

export default ProfilePhoto;
