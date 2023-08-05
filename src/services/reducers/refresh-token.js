import { saveAccessToken, saveRefreshToken } from "../../utils/localStorage";
import {
  GET_REFRESH_TOKEN_ERROR,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REFRESH_TOKEN_SUCCESS,
} from "../actions/refresh-token";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const refreshToken = (state = initialState, action) => {
  switch (action.type) {
    case GET_REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REFRESH_TOKEN_SUCCESS:
      saveAccessToken(action.payload?.accessToken);
      saveRefreshToken(action.payload?.refreshToken);
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_REFRESH_TOKEN_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
