import { TRefreshTokenAction } from "../../types/refresh-token";
import { TRegistrationState } from "../../types/registration";
import { saveStorageAccessToken, saveStorageRefreshToken } from "../../utils/local-storage";
import {
  GET_REGISTRATION_ERROR,
  GET_REGISTRATION_REQUEST,
  GET_REGISTRATION_SUCCESS,
} from "../actions/registration";

const initialState:TRegistrationState = {
  data: null,
  error: null,
  isLoading: false,
};

export const registration = (state = initialState, action:TRefreshTokenAction):TRegistrationState => {
  switch (action.type) {
    case GET_REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REGISTRATION_SUCCESS:
      saveStorageAccessToken(action.payload?.accessToken);
      saveStorageRefreshToken(action.payload?.refreshToken);
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_REGISTRATION_ERROR:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
