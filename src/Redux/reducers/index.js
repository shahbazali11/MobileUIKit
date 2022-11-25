import {combineReducers} from 'redux';
import userReducer from './auth-reducer/auth-reducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
