import { saveStorageAccessToken, saveStorageRefreshToken } from "../../utils/local-storage";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "../actions/login";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const login = (state = initialState, action:any) => {
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
      };
    case GET_LOGIN_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
