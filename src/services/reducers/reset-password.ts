import {
  GET_RESET_PASSWORD_ERROR,
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
} from "../actions/reset-password";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const resetPassword = (state = initialState, action:any) => {
  switch (action.type) {
    case GET_RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_RESET_PASSWORD_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
