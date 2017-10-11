import { fork, takeEvery, call, put, select } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import request from 'service/api';
import { authRequest } from './model';

export function* loginSaga(action) {}
  // Individual exports for testing

function* requestTokenSaga(action) {
  const { url, params } = authRequest.requestToken();
  try {
    const token = yield call(request, url, params)
    console.log(token.message);
  }catch(e) {
    console.log(e.message)
  }

}

function* requestTokenWatchSaga() {
  yield takeEvery(ActionTypes.REQUEST_TOKEN_START, requestTokenSaga);
}

export default function* rootSaga() {
  yield [
    fork(requestTokenWatchSaga)
  ];
}

// POST oauth/request_token
