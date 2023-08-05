import { saveAccessToken, saveRefreshToken } from "../../utils/localStorage";
import {
  GET_REGISTRATION_ERROR,
  GET_REGISTRATION_REQUEST,
  GET_REGISTRATION_SUCCESS,
} from "../actions/registration";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const registration = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REGISTRATION_SUCCESS:
      saveAccessToken(action.payload?.accessToken);
      saveRefreshToken(action.payload?.refreshToken);
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_REGISTRATION_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
