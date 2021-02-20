import { combineReducers } from 'redux';
import user from './user'
import flickFeed from './flickerFeed'
export default combineReducers({user,flickFeed});