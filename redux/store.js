import { createStore, combineReducers } from 'redux'
import { reducers } from './reducers/index'
import { videosReducer } from "./reducers/videosReducer"


export default () => {
    return {
        ...createStore(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }
}