import { flickerFeed } from '../constants/actionConstants'
const initialState = {
    imgList: [],
    favList: [],
    modalImgSource: null
}
const imgFeed = (state = initialState, { type, payload }) => {
    switch (type) {
        case flickerFeed.LIST_IMG:
            return {
                ...state,
                imgList: [...payload]
            };
        case flickerFeed.LIST_FAV_PIC:
            return {
                ...state,
                favList: [...payload]
            }
        case flickerFeed.ADD_FAV_PIC:
            return {
                ...state,
                favList: [...state.favList, { ...payload }]
            }
        case flickerFeed.SET_MODAL_IMG:
            return {
                ...state,
                modalImgSource: payload
            }
        default:
            return state;
    }
}

export default imgFeed