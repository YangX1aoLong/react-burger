import { clearToken } from "../../utils/localStorage";
import {
  GET_LOGOUT_ERROR,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
} from "../actions/logout";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const logout = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOGOUT_SUCCESS:
      clearToken();
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_LOGOUT_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
