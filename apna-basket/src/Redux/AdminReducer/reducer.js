import {
  ADMIN_DELETE_ITEM,
  ADMIN_STATS_DAIRY,
  ADMIN_STATS_FOOD,
  ADMIN_STATS_PRODUCTS,
  GET_ADMIN_DATA_ERROR,
  GET_ADMIN_DATA_REQUEST,
  GET_ADMIN_DATA_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  isDeleted: false,
  Products: [],
  Dairy: [],
  Food: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_ADMIN_DATA_REQUEST:
      return { ...state, isLoading: true };

    case GET_ADMIN_DATA_SUCCESS:
      return { ...state, isLoading: false, Products: payload };

    case GET_ADMIN_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };

    case ADMIN_STATS_DAIRY:
      return { ...state, isLoading: false, Dairy: payload };

    case ADMIN_STATS_FOOD:
      return { ...state, isLoading: false, Food: payload };

    case ADMIN_STATS_PRODUCTS:
      return { ...state, isLoading: false, Products: payload };

    case ADMIN_DELETE_ITEM:
      return { ...state, isDeleted: true };

    default:
      return state;
  }
};
