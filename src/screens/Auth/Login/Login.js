import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
          Log In
        </Text>
      </View>
      <TextInput
        style={styles.inputcontainer}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputcontainer}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
      />
      <TouchableOpacity>
        <View style={styles.submit}>
          <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
            Log In
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
  );
};

export default Login;
