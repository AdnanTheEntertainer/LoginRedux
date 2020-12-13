import { API_PENDING, API_SUCCESS, API_ERROR } from "./action.type";

export const fetchData = () => ({
    type: API_PENDING,
})

export const fetchSuccess = (data) => ({
    type: API_SUCCESS,
    payload: data
})

export const fetchError = (error) => ({
    type: API_ERROR,
    payload: error
})