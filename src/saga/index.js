import { all } from 'redux-saga/effects';
import { userSaga } from './user';
import {imgFeedSaga} from './imgFeed'
// combine all the sagas
export default function* rootSaga() {
    yield all([
        ...userSaga,
        ...imgFeedSaga
    ])
}
