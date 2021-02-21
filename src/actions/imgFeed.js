import { flickerFeed } from '../constants/actionConstants'
export const listImg = (payload) => {
    return {
        type: flickerFeed.LIST_IMG,
        payload
    }
}
export const fetchImg = (payload) => {
    return {
        type: flickerFeed.FETCH_IMG,
        payload
    }
}
export const listFav = (payload) => {
    return {
        type: flickerFeed.LIST_FAV_PIC,
        payload
    }
}
export const addFav = (payload) => {
    return {
        type: flickerFeed.ADD_FAV_PIC,
        payload
    }
}
export const setModalImgSource = (payload)=>{
    console.log(payload)
    return {
        type: flickerFeed.SET_MODAL_IMG,
        payload
    }
}