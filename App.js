import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainNavigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <MainNavigation />
    </Provider>
  );
};
export default App;
