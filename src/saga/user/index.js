
import {
    call, put, takeEvery, fork,
} from 'redux-saga/effects';

const fakeapi = (action) => {
    console.log('hahahah')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('xiaoming')
        }, 500)
    })
}

function* updateName(action) {
    console.log(action,'action')
    const response = yield call(fakeapi, action);
    console.log(response)
     yield put({
        type: 'USER_LOGIN',
        payload: response
    })

}
function* watchUpdateName() {
    yield takeEvery('login', updateName)
}

export const userSaga = [fork(watchUpdateName)]




