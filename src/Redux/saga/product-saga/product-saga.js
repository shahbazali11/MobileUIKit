import {takeEvery, put} from 'redux-saga/effects';
import * as types from '../../types';

function* productRequest() {
  yield takeEvery(types.PRODUCT_DATA_REQUEST, getProduct);
}
function* getProduct() {
  let data = yield fetch('https://jsonplaceholder.typicode.com/posts');
  data = yield data.json();
  yield put({type: types.SET_PRODUCT_DATA, data: data});
}

export default productRequest;
