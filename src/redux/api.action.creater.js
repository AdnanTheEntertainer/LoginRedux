
import { fetchData, fetchError, fetchSuccess } from './api.actions'
import axios from "axios";

const apiActionCreater = (url) => (dispatch) => {
    dispatch(fetchData())
    return new Promise(()=> {
        axios
        .get(url)
        .then((response) =>{
            dispatch(fetchSuccess(response.data))
        })
        .then((error) => {
            dispatch(fetchError(error))
            console.log(error)
        })
    })
}

export default apiActionCreater