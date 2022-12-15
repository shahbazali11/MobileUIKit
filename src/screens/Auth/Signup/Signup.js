import React, {useState, useEffect} from 'react';
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

//firebase
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

//redux
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../redux/actions/auth-action/auth-action';
import Icon from 'react-native-vector-icons/AntDesign';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    GoogleSignin.configure(
      {
        webClientId:
          '473218954623-81r2mv4imfmbe2ubusdvohtotjvgjpna.apps.googleusercontent.com',
      },
      [],
    );
  });

  const handleNavigation = screenName => {
    navigation.navigate(screenName);
  };

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

  //firebase
  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
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
        <View style={styles.passwordTextInput}>
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
        <TouchableOpacity
          onPress={() => {
            onGoogleButtonPress().then(response => {
              console.log(response.user);
              dispatch(setUserData(response.user));
              handleNavigation('Login');
            });
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
          }}
          style={styles.googleFbIcon}>
          <Icon name="google" size={30} color="white" />
          <View style={styles.submitGoogleFb}>
            <Text style={styles.signupButton}>Sign Up with Google</Text>
          </View>
        </TouchableOpacity>
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
          }}
          style={styles.googleFbIcon}>
          <Icon name="facebook-square" size={30} color="white" />
          <View style={styles.submitGoogleFb}>
            <Text style={styles.signupButton}>Sign Up with Facebook</Text>
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
