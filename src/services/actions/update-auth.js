import { fetchUpdateAuth } from "../../utils/get-data";

export const UPDATE_AUTH_REQUEST = "UPDATE_AUTH_REQUEST";
export const UPDATE_AUTH_SUCCESS = "UPDATE_AUTH_SUCCESS";
export const UPDATE_AUTH_ERROR = "UPDATE_AUTH_ERROR";

export const updateAuth = (token,name,email,password) => (dispatch) => {
  dispatch({ type: UPDATE_AUTH_REQUEST });
  return fetchUpdateAuth(token,name,email,password)
    .then((res) => dispatch({ type: UPDATE_AUTH_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: UPDATE_AUTH_ERROR, payload: err }));
};
