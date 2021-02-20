import { flickerFeed } from '../constants/actionConstants'
export const listImg = (payload) => {
    return {
        type: flickerFeed.LIST_IMG,
        payload
    }
}
export const fetchImg = (payload)=>{
    return {
        type: flickerFeed.FETCH_IMG,
        payload
    }
}