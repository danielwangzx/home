import { USER } from '../constants/actionConstants'
const initialState = {
    name:'hahah'
}
const user = (state=initialState, { type, payload }) => {
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

export default user