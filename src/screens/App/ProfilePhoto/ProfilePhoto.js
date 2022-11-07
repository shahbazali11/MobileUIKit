import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import SwitchSelector from 'react-native-switch-selector';
const options = [
  {label: 'Posts', value: 'post'},
  {label: 'Photo', value: 'photo'},
];

const ProfilePhoto = () => {
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
      <View>
        <Image
          source={require('../../../assets/BlogImage.png')}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

export default ProfilePhoto;
