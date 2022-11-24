import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setEmail,
  setPassword,
  setUserData,
} from '../../../Redux/Action/userAction/userAction';

const Signup = ({navigation}) => {
  const userData = useSelector(state => state?.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isSelected, setSelection] = useState(false);

  function handleNavigation(screenName) {
    navigation.navigate(screenName);
  }

  const data = {
    name,
    email,
    password,
  };
  //console.log(data);
  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/cross.png')}
              style={styles.crossImg}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
            Sign Up
          </Text>
          <TouchableOpacity onPress={() => handleNavigation('Login')}>
            <Text style={{color: '#5DB075', fontSize: 16}}>Login</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.inputcontainer}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="Name"
          keyboardType="ascii-capable"
        />
        <TextInput
          style={styles.inputcontainer}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email"
          keyboardType="ascii-capable"
        />
        <View
          style={{
            backgroundColor: '#F6F6F6',
            flexDirection: 'row',
            borderRadius: 8,
            height: 50,
            marginTop: 16,
            alignItems: 'center',
            overflow: 'hidden',
            borderColor: '#E8E8E8',
            borderWidth: 1,
          }}>
          <TextInput
            style={[
              styles.inputcontainer,
              {width: '80%', marginTop: 0, borderRadius: 0, borderWidth: 0},
            ]}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={secureTextEntry}
            placeholder="Password"
          />
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              paddingHorizontal: 10,
            }}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}>
            <Text style={{color: '#5DB075', fontSize: 16, fontWeight: '500'}}>
              {secureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.check}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            // style={styles.checkImg}

            // style={styles.checkbox}
          />
          {/* <TouchableOpacity>
            <Image
              source={require('../../../assets/CheckBox.png')}
              style={styles.checkImg}
              resizeMode={'contain'}
            />
          </TouchableOpacity> */}
          <Text style={styles.text}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(setUserData(data))}>
          <View style={styles.submit}>
            <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.forgot}>
            <Text style={{color: '#5DB075', fontSize: 16, fontWeight: '600'}}>
              Forgot your password?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
