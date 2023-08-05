import {
  UPDATE_AUTH_ERROR,
  UPDATE_AUTH_REQUEST,
  UPDATE_AUTH_SUCCESS,
} from "../actions/update-auth";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export const updateAuth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case UPDATE_AUTH_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};
