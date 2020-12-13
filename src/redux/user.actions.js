import { LOGIN_SUCCESS } from "./action.type";


export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})

export const fetchError = (error) => ({
    type: API_ERROR,
    payload: error
})