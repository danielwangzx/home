
import {
    call, put, takeEvery, fork,
} from 'redux-saga/effects';
import {
    flickr
} from '@/utils/request';
import {flickerFeed} from '@/constants/actionConstants';

function* getImgFeed({payload}) {
    const response = yield call(flickr, payload);
    console.log(response)
     yield put({
        type: flickerFeed.LIST_IMG,
        payload: response
    })

}
function* watchImgFeedSaga() {
    yield takeEvery(flickerFeed.FETCH_IMG, getImgFeed);
}

export const imgFeedSaga = [fork(watchImgFeedSaga)]
