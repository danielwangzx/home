import { USER } from '../constants/actionConstants'
export const userLogin = (payload) => {
    return {
        type: USER.USER_LOGIN,
        payload
    }
}
export const userLoginSaga = (payload)=>{
    return {
        type: 'login',
        payload
    }
}