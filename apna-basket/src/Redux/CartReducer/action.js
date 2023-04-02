import axios from "axios";
import { address, successfullypayment } from "./actionTypes";

export const ADD_TO_CART = "ADD_TO_CART";
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const SET_ORDER = "SET_ORDER";
export const FETCH_TO_CART = "FETCH_TO_CART";

export const addtocartaction = (data) => ({
  type: ADD_TO_CART,
  payload: data
});

// export const addtoCart = (product) => (dispatch) => {
//    axios
//     .post("https://big-basket-api.onrender.com/Cart", product)
//     .then((res) => {
//       console.log("add", res.data);
//       dispatch(addtocartaction(res.data));
//     })
//     .catch((e) => {
//       console.log(e);
//     }); 
// };

export const fetchcartaction = (data) => ({
  type: FETCH_TO_CART,
  payload: data
});

export const fetchtoCart = () => (dispatch) => {
  axios
    .get("https://big-basket-api.onrender.com/Cart")
    .then((res) => {
      // console.log("get", res.data);
      // dispatch(fetchcartaction(res.data));
      dispatch({type: FETCH_TO_CART, payload: res.data})
    })
    .catch((e) => {
      console.log(e);
    });
};

// export const removeItemAction = (data) => {
//   return {
//     type: REMOVE_TO_CART,
//     payload: data
//   };
// };

// export const removeItem = (id) => (dispatch) => {
//   axios
//     .delete(`https://big-basket-api.onrender.com/Cart/${id}`)
//     .then((res) => {
//       // console.log(res.data);
//       dispatch(removeItemAction(res.data));
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally((r) => {
//       dispatch(fetchtoCart());
//     })
// };


export const Address = (data) => (dispatch) => {
  dispatch({ type: address, payload: data });
};

export const successPayment = () => (dispatch) => {
  dispatch({ type: successfullypayment });
};