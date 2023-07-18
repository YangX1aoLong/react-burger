import {
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../actions/order-detail";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const orderDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ORDER_SUCCESS:      
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_ORDER_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
