import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
//
import {AuthHeader, AppInput, SubmitButton} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//redux
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
//Google Signin
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
//facebook signin
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  //
  const data = useSelector(state => state?.user.signupObject);

  function handleNavigation(screenName) {
    navigation.navigate(screenName);
  }

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
        <AuthHeader mainTitle={'Log In'} />
        <KeyboardAwareScrollView>
          <AppInput
            onTextChange={text => setEmail(text)}
            textValue={email}
            placeholderName={'Email'}
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
          <View style={styles.empty}></View>
          <SubmitButton
            buttonText={'Log In'}
            onPressButton={() => {
              if (email == data.email && password == data.password) {
                handleNavigation('Dummy');
              } else {
                alert(
                  "Your Email and Password doesn't match. Please enter the valid Credentials",
                );
              }
            }}
          />
          <SubmitButton
            isLeftGoogleIcon
            isRightText
            buttonText={'Log In With Google'}
            onPressButton={() => {
              onGoogleButtonPress().then(response => {
                console.log('Google Response: ', response.user);
                if (response.user.email == data.email) {
                  console.log('Login Email: ', response.user.email);
                  handleNavigation('Dummy');
                } else {
                  alert(
                    "Your Email doesn't match. Please enter the valid Credentials",
                  );
                }
              });
            }}
          />
          <SubmitButton
            isLeftFacebookIcon
            isRightText
            buttonText={'Log In With Facebook'}
            onPressButton={() => {
              facebookLogin().then(response => {
                console.log('FacebookLogin Response: ', response.user);
                if (response.user.email == data.email) {
                  console.log('Login Email: ', response.user.email);
                  handleNavigation('Dummy');
                } else {
                  alert(
                    "Your Email doesn't match. Please enter the valid Credentials",
                  );
                }
              });
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;
