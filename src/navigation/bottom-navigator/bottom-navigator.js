import React from 'react';
import {Text, View} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Calender from '../../screens/App/Calender/Calender';

import Warning from '../../screens/App/Warning/Warning';
import ProfilePost from '../../screens/App/ProfilePost/ProfilePost';
import Expenses from '../../screens/App/Expenses/Expenses';
import Search from '../../screens/App/Search/Search';
import Feed from '../../screens/App/Feed/Feed';
import Market from '../../screens/App/Market/Market';

import Signup from '../../screens/Auth/Signup/Signup';
import Contents from '../../screens/App/Contents/Contents';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#FAFAFA',
        tabBarActiveBackgroundColor: '#FAFAFA',
        tabBarActiveTintColor: '#5DB075',
        tabBarInactiveTintColor: '#E8E8E8',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons
                name="table-of-contents"
                size={30}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color}) => {
            return <AntDesign name="barchart" size={30} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({color}) => {
            return <Entypo name="shop" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => {
            return <Ionicons name="search" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfilePost"
        component={ProfilePost}
        options={{
          tabBarIcon: ({color}) => {
            return <AntDesign name="profile" size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
