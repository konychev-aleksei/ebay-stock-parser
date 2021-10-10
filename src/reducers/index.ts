import {applyMiddleware, combineReducers, createStore} from 'redux'
import { usersReducer } from './usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const root = combineReducers({
    users: usersReducer
})

export const store = createStore(root, composeWithDevTools())