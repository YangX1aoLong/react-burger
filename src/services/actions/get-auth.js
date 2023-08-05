import { fetchGetAuth } from "../../utils/get-data";

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR";

export const getAuth = (token) => (dispatch) => {
  dispatch({ type: GET_AUTH_REQUEST });
  return fetchGetAuth(token)
    .then((res) => dispatch({ type: GET_AUTH_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: GET_AUTH_ERROR, payload: err }));
};
