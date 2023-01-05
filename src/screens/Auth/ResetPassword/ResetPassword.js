import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const ResetPassword = () => {
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter new password"
        onChangeText={value => setNewPass(value)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm password"
        onChangeText={value => setConfirmPass(value)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: '#fff'}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;

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
