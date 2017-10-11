import { fork } from 'redux-saga/effects';
import mainRootSaga from 'containers/Main/saga';
import authRootSaga from 'containers/Auth/saga';

export default function* rootSaga() {
  yield [
    fork(mainRootSaga),
    fork(authRootSaga)
  ];
}
