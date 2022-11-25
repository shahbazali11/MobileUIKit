import React from 'react';

import Signup from './src/screens/Auth/Signup/Signup';
import Login from './src/screens/Auth/Login/Login';
import Contents from './src/screens/App/Contents/Contents';
import {FeedHeader} from './src/components/FeedHeader/FeedHeader';
import Feed from './src/screens/App/Feed/Feed';
import Market from './src/screens/App/Market/Market';
import Warning from './src/screens/App/Warning/Warning';
import Search from './src/screens/App/Search/Search';
import Navigation from './src/screens/justForLearning/Navigation';
import BlogPost from './src/screens/App/BlogPost/BlogPost';
import Expenses from './src/screens/App/Expenses/Expenses';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ProfilePost from './src/screens/App/ProfilePost/ProfilePost';
import ProfilePhoto from './src/screens/App/ProfilePhoto/ProfilePhoto';
import Messages from './src/screens/App/Messages/Messages';
import BottomNavigator from './src/navigation/bottom-navigator/bottom-navigator';
//
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomNavigqtor" component={BottomNavigator} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="FeedHeader" component={FeedHeader} />
          <Stack.Screen name="Contents" component={Contents} />
          <Stack.Screen name="ProfilePost" component={ProfilePost} />
          <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
