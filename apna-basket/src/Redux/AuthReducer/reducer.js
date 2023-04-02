
import { types } from "./actionType";

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
    default:
      return state;
  }
};

