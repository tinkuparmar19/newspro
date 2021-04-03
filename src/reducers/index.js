import { combineReducers } from 'redux'

import newsReducer from './news'
import newsFilterReducer from './newsFilter'
import bookmark from './bookmark'

const rootReducer = combineReducers({
    news: newsReducer,
    filter: newsFilterReducer,
    bookmark
})

export default rootReducer