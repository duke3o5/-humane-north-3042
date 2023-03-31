import axios from 'axios';
import { GET_ADMIN_DATA_ERROR, GET_ADMIN_DATA_REQUEST, GET_ADMIN_DATA_SUCCESS, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS } from './actionTypes';
const url='https://big-basket-api.onrender.com';

export const postAdminData=(data)=>(dispatch)=>{
    dispatch({type:POST_REQUEST_SUCCESS})
    axios.post(`${url}/Products`, data).then((res)=>{
        // console.log('Data Posted Successfully');
        dispatch({type: POST_REQUEST_SUCCESS})
    })
    .catch(()=>{
        dispatch({type: POST_REQUEST_ERROR});
    })
}


export const GetAdminData=(params)=>(dispatch)=>{
    console.log(params);
    dispatch({type: GET_ADMIN_DATA_REQUEST});
    axios.get(`${url}/products`,params).then((res)=>dispatch({type: GET_ADMIN_DATA_SUCCESS, payload: res.data}))
    .catch(()=>{
        dispatch({type:GET_ADMIN_DATA_ERROR})
    })
}
