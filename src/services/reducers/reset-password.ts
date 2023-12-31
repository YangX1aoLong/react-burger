import { TResetPasswordAction, TResetPasswordState } from "../../types/reset-password";
import {
  GET_RESET_PASSWORD_ERROR,
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
} from "../actions/reset-password";

const initialState:TResetPasswordState = {
  data: null,
  error: null,
  isLoading: false,
};

export const resetPassword = (state = initialState, action:TResetPasswordAction):TResetPasswordState => {
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
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
