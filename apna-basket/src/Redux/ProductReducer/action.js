import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const getProduct = (obj) => (dispatch) => {
    // console.log(credentials)
    dispatch({ type: PRODUCT_REQUEST })

    axios.get('https://big-basket-api.onrender.com/Products', obj)
        .then((res) => {
            // console.log(res);
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
        }).catch(() => {
            console.log('failed')
            dispatch({ type: PRODUCT_FAILURE })
        })
}