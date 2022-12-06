import axios from 'axios';
import {takeEvery, put, takeLatest} from 'redux-saga/effects';
import * as types from '../../types';

function* productRequest() {
  yield takeLatest(types.PRODUCT_DATA_REQUEST, getProduct);
}
// function* getProduct() {
//   let data = yield fetch('https://jsonplaceholder.typicode.com/posts');
//   data = yield data.json();
//   yield put({type: types.SET_PRODUCT_DATA, data: data});
// }

function* getProduct() {
  let res = yield axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      Accept: 'application/json',
    },
  });
  yield put({type: types.SET_PRODUCT_DATA, res: res?.data});
}

export default productRequest;
