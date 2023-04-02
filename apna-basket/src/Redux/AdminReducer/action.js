import axios from 'axios';
import { ADMIN_DELETE_ITEM, ADMIN_STATS, ADMIN_STATS_DAIRY, ADMIN_STATS_FOOD, ADMIN_STATS_PRODUCTS, GET_ADMIN_DATA_ERROR, GET_ADMIN_DATA_REQUEST, GET_ADMIN_DATA_SUCCESS, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS } from './actionTypes';
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
    // console.log(params);
    dispatch({type: GET_ADMIN_DATA_REQUEST});
    axios.get(`${url}/products`,params).then((res)=>dispatch({type: GET_ADMIN_DATA_SUCCESS, payload: res.data}))
    .catch(()=>{
        dispatch({type:GET_ADMIN_DATA_ERROR})
    })
}


export const adminAllDairy=(dispatch)=>{
    dispatch({type:GET_ADMIN_DATA_REQUEST})

    axios.get(`${url}/Dairy`).then((res)=>{
        dispatch({type: ADMIN_STATS_DAIRY, payload: res.data});
    })
    .catch(()=>{
        dispatch({type:GET_ADMIN_DATA_ERROR})
    })
};

export const adminAllFood=(dispatch)=>{
    dispatch({type:GET_ADMIN_DATA_REQUEST})

    axios.get(`${url}/Food`).then((res)=>{
        dispatch({type: ADMIN_STATS_FOOD, payload: res.data});
    })
    .catch(()=>{
        dispatch({type:GET_ADMIN_DATA_ERROR})
    })
};

export const adminAllProducts=(dispatch)=>{
    dispatch({type:GET_ADMIN_DATA_REQUEST})

    axios.get(`${url}/Products`).then((res)=>{
        dispatch({type: ADMIN_STATS_PRODUCTS, payload: res.data});
    })
    .catch(()=>{
        dispatch({type:GET_ADMIN_DATA_ERROR})
    })
};


export const AdminUpdateItem=(data, id)=>(dispatch)=>{
    dispatch({type:GET_ADMIN_DATA_REQUEST})
    console.log(data);
   return axios.patch(`${url}/Products/${id}`, data).then(()=>{
        dispatch({type: GET_ADMIN_DATA_SUCCESS});
    })
    .catch(()=>{
        dispatch({type:GET_ADMIN_DATA_ERROR})
    })
}

export const deleteAdminItem=(id)=>(dispatch)=>{
    // console.log(id);
   return axios.delete(`${url}/Products/${id}`).then(()=>{
    dispatch({type: ADMIN_DELETE_ITEM});
    })
    .catch(()=>{
        console.log("Delete Error");
    })
}