import {combineReducers} from 'redux';
import userReducer from '../Reducer/userReducer/userReducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
