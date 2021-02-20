import { flickerFeed } from '../constants/actionConstants'
const initialState = {
    imgList:[]
}
const user = (state=initialState, { type, payload }) => {
    switch (type) {
        case flickerFeed.LIST_IMG:
            return {
                ...state,
                imgList: payload
            };
        default:
            return state;
    }
}

export default user