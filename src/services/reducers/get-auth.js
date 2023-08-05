import {
  GET_AUTH_ERROR,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
} from "../actions/get-auth";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const getAuth = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_AUTH_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
