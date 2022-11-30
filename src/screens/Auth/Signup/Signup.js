import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

//redux
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../redux/actions/auth-action/auth-action';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isSelected, setSelection] = useState(false);

  function handleNavigation(screenName) {
    navigation.navigate(screenName);
  }
  //This method will validate the form
  const validateForms = () => {
    let response = {message: '', status: false};
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name === '' || email === '' || password === '') {
      response = {message: 'Please fill all the fields', status: false};
    } else if (name.length < 6) {
      response = {
        message: 'Name should contain atleast 6 characters',
        status: false,
      };
    } else if (reg.test(email) === false) {
      response = {message: 'Email is not correct', status: false};
    } else if (password.length < 8) {
      response = {
        message: 'Password should contain atleast 8 characters',
        status: false,
      };
    } else {
      response = {message: '', status: true};
    }
    return response;
  };
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
          <Text style={styles.headerSText}>Sign Up</Text>
          <TouchableOpacity onPress={() => handleNavigation('Login')}>
            <Text style={styles.headerText}>Login</Text>
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
            style={styles.inputText}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={secureTextEntry}
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.showPassword}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}>
            <Text style={styles.button}>
              {secureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.check}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text style={styles.text}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            const validateRes = validateForms();
            if (validateRes.status) {
              const data = {
                name,
                email,
                password,
              };
              dispatch(setUserData(data));
              handleNavigation('Login');
            } else {
              Alert.alert('Please confirm', validateRes.message);
            }
          }}>
          <View style={styles.submit}>
            <Text style={styles.signupButton}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.forgot}>
            <Text style={styles.button}>Forgot your password?</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
