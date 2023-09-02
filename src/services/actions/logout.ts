import { fetchLogout } from "../../utils/get-data";

export const GET_LOGOUT_REQUEST = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_ERROR = "GET_LOGOUT_ERROR";

export const getLogout:any = (token:any) => (dispatch:any) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  return fetchLogout(token)
    .then((res) => dispatch({ type: GET_LOGOUT_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: GET_LOGOUT_ERROR, payload: err }));
};
