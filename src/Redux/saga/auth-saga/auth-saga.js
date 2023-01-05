import {put, takeEvery} from 'redux-saga/effects';
import * as types from '../../types';

export function* authRequest() {
  yield takeEvery(types.SIGNUP_REQUEST_REQUEST, signup);
}

function* signup(data) {
  yield put({type: types.SAVE_INFO_REQUEST, data});
}
