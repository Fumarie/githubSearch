import { CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";

const initialState = {
    users: [],
    user: {},
    loading: false
}

const handlers = {
    [SEARCH_USERS]: (state, action) => ({...state, users: action.payload, loading: false}),
    [CLEAR_USERS]: state => ({...state, users: []}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [GET_USER]: (state, action) => ({...state, user: action.payload, loading: false}),
    DEFAULT: state => state
}

export const githubReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}