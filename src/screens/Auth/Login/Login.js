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
  const data = useSelector(state => state?.userReducer.signupObject);

  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
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
            onChangeText={setPassword}
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
    </View>
  );
};

export default Login;
