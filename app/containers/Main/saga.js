import { take, call, put, select } from 'redux-saga/effects';
import * as Actions from 'containers/Main/constants';

//import api from service

// Actions.FETCH_IMAGE_START
// Actions.FETCH_IMAGE_SUCCESS
// Actions.FETCH_IMAGE_ERROR

function* fetchImages(action) {
  try {
    //yield const images = call(Api.fetchImages, action.feature)
    //yield put({type: 'Actions.FETCH_IMAGE_SUCESS', images: images})
  } catch(e) {
    // yield put({type: 'Actions.FETCH_IMAGE_ERROR', error: e.message})
  }
}

export default function* mainRootSaga() {
  //yield takeEvery('Actions.FETCH_IMAGE_START', fetchImages)
}
