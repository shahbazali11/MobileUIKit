import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import SwitchSelector from 'react-native-switch-selector';

const options = [
  {label: 'Posts', value: 'post'},
  {label: 'Photo', value: 'photo'},
];

const ProfilePhoto = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <View style={styles.hearder}>
          <TouchableOpacity>
            <Text style={styles.headerText}>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.headerpProfileText}>Profile</Text>
          <TouchableOpacity>
            <Text
              style={styles.headerText}
              onPress={() => {
                navigation.replace('Login');
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
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
