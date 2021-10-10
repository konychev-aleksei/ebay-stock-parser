import { userType, actionType } from '../types/index'

const REMOVE_USER = 'REMOVE_USER', COMMIT_USERS = 'COMMIT_USERS'

export const usersReducer = (state: Array<userType> = [], action: actionType) => {
    switch(action.type) {
        case COMMIT_USERS:
            return action.payload
        case REMOVE_USER:
            return state.filter(user => user.id !== action.payload)
        default:
            return state
    }
}

export const commitUsers = (payload: Array<userType>) => ({ type: COMMIT_USERS, payload })
export const removeUsers = (payload: number) => ({ type: REMOVE_USER, payload })