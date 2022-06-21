import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { videosReducer } from './videosReducer'


export const reducers = combineReducers({
    userReducer,
    videosReducer, /* preloadedState, */
})

