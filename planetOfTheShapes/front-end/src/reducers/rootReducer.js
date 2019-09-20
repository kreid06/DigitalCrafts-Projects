import { combineReducers } from 'redux'

import playerReducer from './playersReducer';

const rootReducer = combineReducers({
    players: playerReducer
})

export default rootReducer;