import { TDispatch } from "../../types/socket";
import { fetchLogout } from "../../utils/get-data";
import { clearStorage } from "../../utils/local-storage";

export const GET_LOGOUT_REQUEST = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_ERROR = "GET_LOGOUT_ERROR";

export const getLogout = (token: string) => (dispatch: TDispatch) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  clearStorage();
  return fetchLogout(token)
    .then((res) => dispatch({ type: GET_LOGOUT_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: GET_LOGOUT_ERROR, payload: err }));
};
