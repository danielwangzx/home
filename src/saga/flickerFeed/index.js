
import {
    call, put, takeEvery, fork,
} from 'redux-saga/effects';
import {
    flickr
} from '@/utils/request';
import {flickerFeed} from '@/constants/actionConstants';

function* getImgFeed(action) {
    const response = yield call(flickr, action);
     yield put({
        type: flickerFeed.LIST_IMG,
        payload: response
    })

}
function* watchImgFeedSaga() {
    yield takeEvery('fetchImgFeed', getImgFeed)
}

export const imgFeedSaga = [fork(watchImgFeedSaga)]
