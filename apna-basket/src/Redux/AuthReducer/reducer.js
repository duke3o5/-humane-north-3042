
import { types } from "./actionType";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../Utilites/localStorage";
import { LOGOUT_SUCCESS } from "./actionTypes";


const initialState = {
  isLoading: false,
  isError: false,
  userData: {},
  isAuth: false,
  userlist: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SET_USER_DATA: {
      return {
        ...state,
        userData: { ...payload },
        isAuth: true,
      };
    }
    case types.LOGIN_GET_USER_DATA: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case types.LOGIN_REMOVE_USER_DATA: {
      return {
        ...state,
        userData: {},
      };
    }
    case types.ADD_USER_LOADING: {

      return {
        ...state,
        isLoading: true,
      };

    }
    case types.ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    }
    case types.GET_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userlist: [...payload],
      };
    }
    case types.GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGOUT_SUCCESS:{
      return {...state, isAuth: payload}
    }

    default:
      return state;
  }
};
// const userData = getLocalStorageItem("userData");
// // if (userData) {
// //   initialState.userData = userData;
// //   initialState.isAuth = true;
// // }

