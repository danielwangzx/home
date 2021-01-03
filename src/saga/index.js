import { all } from 'redux-saga/effects';
import userSaga from './user';

// combine all the sagas
export default function* rootSaga() {
  yield all([
    ...userSaga,
  ])
}
