import {
  GET_ADMIN_DATA_ERROR,
  GET_ADMIN_DATA_REQUEST,
  GET_ADMIN_DATA_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  AdminData: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_ADMIN_DATA_REQUEST:
      return { ...state, isLoading: true };

    case GET_ADMIN_DATA_SUCCESS:
      return { ...state, isLoading: false, AdminData: payload };

    case GET_ADMIN_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
