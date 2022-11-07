import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
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
        <TouchableOpacity>
          <Text style={{color: '#5DB075', fontSize: 16}}>Login</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.inputcontainer}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.inputcontainer}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.inputcontainer}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        keyboardType="ascii-capable"
      />
      <View style={styles.check}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/CheckBox.png')}
            style={styles.checkImg}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.text}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>
      <TouchableOpacity>
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
  );
};

export default Signup;
