import {fork} from 'redux-saga/effects';
import {authRequest} from './auth-saga/auth-saga';
import productRequest from './product-saga/product-saga';

export function* rootSaga() {
  yield fork(authRequest);
  yield fork(productRequest);
}
