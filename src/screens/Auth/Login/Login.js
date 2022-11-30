import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

//redux
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  function handleNavigation(screenName) {
    navigation.navigate(screenName);
  }

  //
  const data = useSelector(state => state?.user.signupObject);

  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Log In</Text>
        </View>
        <TextInput
          style={styles.inputcontainer}
          onChangeText={setEmail}
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
            onChangeText={setPassword}
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

        <TouchableOpacity
          onPress={() => {
            if (email == data.email && password == data.password) {
              handleNavigation('Dummy');
            } else {
              alert(
                "Your Email and Password doesn't match. Please enter the valid Credentials",
              );
            }
          }}>
          <View style={styles.submit}>
            <Text style={styles.LoginButton}>Log In</Text>
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

export default Login;
