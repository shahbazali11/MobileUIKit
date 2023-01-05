import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import navigation from '../../justForLearning/Navigation';

const {height, width} = Dimensions.get('window');

const VerifyOTP = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [OTPInput, setOTPInput] = useState('');
  const [confirmData, setConfirmData] = useState('');

  const sendOtp = async () => {
    try {
      const response = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirmData(response);
      console.log('Firebase OTP Response:', response);
      alert('OTP sent to your mobile...!');
    } catch (err) {
      console.log('Error in send OTP: ', err);
    }
  };

  const submitOtp = async () => {
    try {
      const response = await confirmData.confirm(OTPInput);
      console.log(response);
      alert('Your number is verified...!');
    } catch (err) {
      console.log('Error in submit OTP: ', err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter You Mobile Number..."
        onChange={value => setPhoneNumber(value)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={() => sendOtp()}>
        <Text style={{color: '#ffff'}}>Send OTP</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder="Enter OTP..."
        onChange={value => setOTPInput(value)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submitOtp();
          navigation.navigate('ResetPassword');
        }}>
        <Text style={{color: '#ffff'}}>Submit OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: (width / 100) * 80,
    height: (height / 100) * 7,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fffff1',
    borderColor: 'gray',
  },
  button: {
    backgroundColor: '#5DB075',
    width: (width / 100) * 30,
    height: (height / 100) * 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
