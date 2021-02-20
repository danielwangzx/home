import { flickerFeed } from '../constants/actionConstants'
const initialState = {
    imgList:[]
}
const imgFeed = (state=initialState, { type, payload }) => {
    console.log('hi',type,payload,state)
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

export default imgFeed