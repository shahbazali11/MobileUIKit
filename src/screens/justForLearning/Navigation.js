import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

function HomeScreen({navigation}) {
  //   function handleNavigation(screenname) {
  //     navigation.navigate(screenname);
  //   }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
          <Text>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
          <Text>Screen 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
