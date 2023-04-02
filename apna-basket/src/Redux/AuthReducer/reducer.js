import { getData, setData } from "../../Utils/accessLocalStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isAuth: getData("isAuth") || false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      setData("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGOUT_SUCCESS:
      setData("isAuth", false);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
      };
    default:
      return state;
  }
};

export { reducer };
