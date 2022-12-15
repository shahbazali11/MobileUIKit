import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainNavigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};
export default App;
