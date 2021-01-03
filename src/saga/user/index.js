
import { USER } from '@/constants/actionConstants'
import {
    call, put, takeEvery, fork,
} from 'redux-saga/effects'

const api = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('xiaoming')
        }, 500)
    })
}

function* watchUpdateName() {
    console.log(USER)
    yield takeEvery()
}

export default [fork(watchUpdateName)]




