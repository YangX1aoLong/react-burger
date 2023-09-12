import { TRefreshTokenAction, TRefreshTokenState } from "../../types/refresh-token";
import { saveStorageAccessToken, saveStorageRefreshToken } from "../../utils/local-storage";
import {
  GET_REFRESH_TOKEN_ERROR,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REFRESH_TOKEN_SUCCESS,
} from "../actions/refresh-token";

const initialState: TRefreshTokenState = {
  data: null,
  error: null,
  isLoading: false,
};

export const refreshToken = (state = initialState, action:TRefreshTokenAction):TRefreshTokenState => {
  switch (action.type) {
    case GET_REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REFRESH_TOKEN_SUCCESS:
      saveStorageAccessToken(action.payload?.accessToken);
      saveStorageRefreshToken(action.payload?.refreshToken);
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
