import {takeEvery, put} from 'redux-saga/effects';
import * as types from '../../types';

function* getProduct() {
  let data = yield fetch('https://jsonplaceholder.typicode.com/posts');
  data = yield data.json();
  yield put({type: types.SET_PRODUCT_DATA, data: data});
}
function* productRequest() {
  yield takeEvery(types.PRODUCT_DATA_REQUEST, getProduct);
}

export default productRequest;
