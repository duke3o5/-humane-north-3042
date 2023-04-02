// actions.js
import axios from "axios";
import { types } from "./actionType";
import {
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../Utilites/localStorage";
import { LOGOUT_SUCCESS } from "./actionTypes";

export const setUserData = (data) => ({
  type: types.LOGIN_SET_USER_DATA,
  payload: data,
});

export const getUserData = () => ({
  type: types.LOGIN_GET_USER_DATA,
});

export const removeUserData = () => ({
  type: types.LOGIN_REMOVE_USER_DATA,
});

export const addUserLoading = () => ({
  type: types.ADD_USER_LOADING,
});

export const addUserSuccess = () => ({
  type: types.ADD_USER_SUCCESS,
});

export const addUserError = () => ({
  type: types.ADD_USER_ERROR,
});

export const getUserLoading = () => ({
  type: types.GET_USER_LOADING,
});

export const getUserSuccess = (data) => ({
  type: types.GET_USER_SUCCESS,
  payload: data,
});

export const getUserError = () => ({
  type: types.GET_USER_ERROR,
});

export const addUser = (userData) => async (dispatch) => {
  dispatch(addUserLoading());
  try {
    const response = await axios.post(
      "https://big-basket-api.onrender.com/Users",
      userData
    );
    if (response.status === 201) {
      dispatch(addUserSuccess());
      console.log("User added successfully!");
    }
  } catch (error) {
    dispatch(addUserError());
    console.error(error);
    console.log("An error occurred while adding the user.");
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch(getUserLoading());
  try {
    const response = await axios.get(
      "https://big-basket-api.onrender.com/Users"
    );
    if (response.status === 200) {
      dispatch(getUserSuccess(response.data));
    }
  } catch (error) {
    dispatch(getUserError());
    console.error(error);
    alert("An error occurred while fetching the users.");
  }
};

//LOGIN AND LOGOUT

// sigin or Login

export const SetUserDataAfterLogin =
  (userData = {}) =>
  async (dispatch) => {
    try {
      const result = dispatch({
        type: types.LOGIN_SET_USER_DATA,
        payload: userData,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

// signout or Logout from the website

export const RemoveUserDataAfter = () => async (dispatch) => {
  try {
    const result = dispatch({
      type: types.LOGIN_SET_USER_DATA,
      payload: {},
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const Logout=(dispatch)=>{
  // console.log('she')
  dispatch({type:LOGOUT_SUCCESS, payload: false})
}