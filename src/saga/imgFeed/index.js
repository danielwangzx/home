
import {
    call, put, takeEvery, fork,
} from 'redux-saga/effects';
import {
    flickr
} from '@/utils/request';
import { flickerFeed } from '@/constants/actionConstants';
import { message } from 'antd';

function* getImgFeed({ payload }) {
    const response = yield call(flickr, payload);
    if (response.status === 200 && response.data) {
        if (response.data.length > 0) {
            const { data } = response;
            yield put({
                type: flickerFeed.LIST_IMG,
                payload: data
            })
        } else {
            message.error(`it seems nobody has ever comtemplated a picture of ${payload} yet`)
        }
    }
}
function* watchImgFeedSaga() {
    yield takeEvery(flickerFeed.FETCH_IMG, getImgFeed);
}

export const imgFeedSaga = [fork(watchImgFeedSaga)]
