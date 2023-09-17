import { TLoginAction, TLoginState } from "../../types/login";
import {
  saveStorageAccessToken,
  saveStorageRefreshToken,
} from "../../utils/local-storage";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "../actions/login";
import {
  GET_LOGOUT_ERROR,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
} from "../actions/logout";

const initialState: TLoginState = {
  data: null,
  error: null,
  isLoading: false,
};

export const login = (
  state = initialState,
  action: TLoginAction
): TLoginState => {
  switch (action.type) {
    case GET_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOGIN_SUCCESS:
      saveStorageAccessToken(action.payload?.accessToken);
      saveStorageRefreshToken(action.payload?.refreshToken);
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case GET_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    case GET_LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
