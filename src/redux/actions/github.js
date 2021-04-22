import axios from "axios";
import { CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export function setLoading() {
    return {type: SET_LOADING}
}

export function searchUsers(value) {

    console.log('action serach users', value)
    return async dispatch => {
        try {
            dispatch(setLoading())
            const response = await axios.get(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`).then(response => response.data)
            dispatch({type: SEARCH_USERS, payload: response.items})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getUser(name) {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`).then(response => response.data)
            dispatch({type: GET_USER, payload: response})
        } catch (e) {
            console.log(e)
        }
    }
}

export function clearUsers() {
    return {type: CLEAR_USERS}
}