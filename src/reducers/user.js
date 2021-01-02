import { USER } from '../constants/actionConstants'
const initialState = {
    name:'hahah'
}
export default (state=initialState, { type, payload }) => {
    switch (type) {
        case USER.USER_LOGIN:
            return {
                ...state,
                name: payload
            };
        default:
            return state;
    }
}