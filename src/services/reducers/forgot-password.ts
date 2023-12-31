import { TForgotPasswordAction, TForgotPasswordState } from "../../types/forgot-password";
import {
  GET_FORGOT_PASSWORD_ERROR,
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
} from "../actions/forgot-password";

const initialState: TForgotPasswordState = {
  data: null,
  error: null,
  isLoading: false,
};

export const forgotPassword = (state = initialState, action:TForgotPasswordAction): TForgotPasswordState => {
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
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
