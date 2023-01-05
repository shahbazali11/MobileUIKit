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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
//
import {AuthHeader, AppInput, SubmitButton} from '../../../components';

//firebase
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
//facebook signin
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

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
    } else if (isSelected === false) {
      response = {
        message: 'Please check the promotional information',
        status: false,
      };
    } else {
      response = {message: '', status: true};
    }
    return response;
  };

  const handleSignup = async () => {
    try {
      const isUserSignup = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User Credientials: ', isUserSignup);
    } catch (err) {
      console.log('Error for signup: ', err);
    }
  };

  //firebase google signin
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

  //firebase facebook signin
  facebookLogin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <AuthHeader
          isLeftImage
          mainTitle={'Sign In'}
          rightTitle={'Login'}
          onPressRight={() => handleNavigation('Login')}
        />
        <KeyboardAwareScrollView>
          <AppInput
            onTextChange={text => setName(text)}
            textValue={name}
            placeholderName={'Name'}
          />
          <AppInput
            onTextChange={text => setEmail(text)}
            textValue={email}
            placeholderName={'Email'}
          />
          <View style={styles.passwordTextInput}>
            <AppInput
              onTextChange={text => setPassword(text)}
              textValue={password}
              placeholderName={'Password'}
              containerStyle={{width: '80%'}}
              secureText
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
            <CheckBox
              value={isSelected}
              onValueChange={() => setSelection(!isSelected)}
            />
            <Text style={styles.text}>
              I would like to receive your newsletter and other promotional
              information.
            </Text>
          </View>
          <SubmitButton
            buttonText={'Sign Up'}
            onPressButton={() => {
              const validateRes = validateForms();
              if (validateRes.status) {
                const data = {
                  name,
                  email,
                  password,
                };
                handleSignup();
                dispatch(setUserData(data));
                handleNavigation('Login');
              } else {
                Alert.alert('Please confirm', validateRes.message);
              }
            }}
          />
          <SubmitButton
            onPressButton={() => {
              onGoogleButtonPress().then(response => {
                console.log('Google Response: ', response.user);
                dispatch(setUserData(response.user));
                handleNavigation('Login');
              });
            }}
            isLeftGoogleIcon
            buttonText={'Sign Up with Google'}
            isRightText
          />
          <SubmitButton
            onPressButton={() => {
              facebookLogin().then(response => {
                console.log(response.user);
                dispatch(setUserData(response.user));
                handleNavigation('Login');
              });
            }}
            isLeftFacebookIcon
            buttonText={'Sign Up with Facebook'}
            isRightText
          />
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => {
              handleNavigation('VerifyOTP');
            }}>
            <Text style={styles.button}>Forgot your password?</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Signup;
