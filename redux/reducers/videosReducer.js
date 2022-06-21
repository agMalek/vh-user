import { SET_VIDEOS } from "../actions/videosActions.js";

const initialState = {
    videos: []
}

export const videosReducer = (state = initialState, action) => {
    if (action.type === SET_VIDEOS) {
        return {
            ...state,
            videos: action.payload 
        }
    }
    return state
}