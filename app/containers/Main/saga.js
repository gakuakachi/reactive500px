import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as Actions from 'containers/Main/constants';
import mainRequest from './model';
import request from 'service/api';

// Actions.FETCH_IMAGE_START
// Actions.FETCH_IMAGE_SUCCESS
// Actions.FETCH_IMAGE_ERROR

function* fetchImages(action) {
  try {
    const images = yield call(request, mainRequest.getFeaturedImages(action.params));
    console.log(images);
    yield put({type: Actions.FETCH_IMAGE_SUCCESS, images: images})
  } catch(e) {
    yield put({type: Actions.FETCH_IMAGE_ERROR, error: e.message})
  }
}

export default function* mainRootSaga() {
  yield takeEvery(Actions.FETCH_IMAGE_START, fetchImages)
}
