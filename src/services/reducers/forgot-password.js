import {
  GET_FORGOT_PASSWORD_ERROR,
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
} from "../actions/forgot-password";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_FORGOT_PASSWORD_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
