
import {
    call, put, takeEvery, fork,
} from 'redux-saga/effects';

const fakeapi = (action) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(action.payload)
        }, 500)
    })
}

function* updateName(action) {
    const response = yield call(fakeapi, action);
     yield put({
        type: 'USER_LOGIN',
        payload: response
    })

}
function* watchUpdateName() {
    yield takeEvery('login', updateName)
}

export const userSaga = [fork(watchUpdateName)]




