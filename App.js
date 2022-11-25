import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return <Provider store={store}></Provider>;
};
export default App;
