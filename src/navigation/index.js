import React from 'react';

import Signup from '../../src/screens/Auth/Signup/Signup';
import Login from '../../src/screens/Auth/Login/Login';
import Contents from '../../src/screens/App/Contents/Contents';
import {FeedHeader} from '../../src/components/FeedHeader/FeedHeader';
import Feed from '../../src/screens/App/Feed/Feed';
import Market from '../../src/screens/App/Market/Market';
import Warning from '../../src/screens/App/Warning/Warning';
import Search from '../../src/screens/App/Search/Search';
import Navigation from '../../src/screens/justForLearning/Navigation';
import BlogPost from '../../src/screens/App/BlogPost/BlogPost';
import Expenses from '../../src/screens/App/Expenses/Expenses';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ProfilePost from '../../src/screens/App/ProfilePost/ProfilePost';
import ProfilePhoto from '../../src/screens/App/ProfilePhoto/ProfilePhoto';
import Messages from '../../src/screens/App/Messages/Messages';
import Dummy from '../screens/App/dummy/dummy';
import DummyProduct from '../screens/App/dummyProduct/dummyProduct';
import BottomNavigator from '../../src/navigation/bottom-navigator/bottom-navigator';
import AsyncStorageData from '../screens/App/AsyncStorageData/AsyncStorageData';
import Country from '../screens/App/Country/Country';
import Maps from '../screens/App/Maps/Maps';
import VerifyOTP from '../screens/Auth/VerifyOTP/VerifyOTP';
import ResetPassword from '../screens/Auth/ResetPassword/ResetPassword';
//
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomNavigqtor" component={BottomNavigator} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FeedHeader" component={FeedHeader} />
        <Stack.Screen name="Contents" component={Contents} />
        <Stack.Screen name="ProfilePost" component={ProfilePost} />
        <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
        <Stack.Screen name="Dummy" component={Dummy} />
        <Stack.Screen name="DummyProduct" component={DummyProduct} />
        <Stack.Screen name="AsyncStorageData" component={AsyncStorageData} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
