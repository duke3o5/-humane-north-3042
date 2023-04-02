import {
  ADD_TO_CART,
  FETCH_DATA,
  FETCH_TO_CART,
  GET_SINGLE_PRODUCT,
  REMOVE_TO_CART,
  SET_ORDER,
} from "./action";
import { address, successfullypayment } from "./actionTypes";

const initState = {
  product: [],
  currentProduct: {},
  cart: [],
  order: [],
  loading: false,
  data: [],
  ItemCount: 0,
  totalCartPrice: 0,
  deliveryAddress: {},
};


export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case FETCH_TO_CART: {
      return {
        ...state,
        cart: [...action.payload],
      };
    }
    case REMOVE_TO_CART: {
      return {
        ...state,
        cart: [action.payload],
      };
    }

    case address: {
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    }

    case successfullypayment: {
      return {
        loading: false,
        data: [],
        ItemCount: 0,
        totalCartPrice: 0,
        deliveryAddress: {},
      };
    }
    default:
      return state;
  }
};
