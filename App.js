import {Provider} from 'react-redux';
import store from './src/redux/store';
import RootIndex from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootIndex />
    </Provider>
  );
};
export default App;
