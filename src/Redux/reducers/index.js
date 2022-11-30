import {combineReducers} from 'redux';
import userReducer from './auth-reducer/auth-reducer';
import {productReducer} from './product-reducer/product-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export default rootReducer;
