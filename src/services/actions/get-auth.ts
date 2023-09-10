import { TDispatch } from "../../types";
import { fetchGetAuth } from "../../utils/get-data";

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR";

export interface IGetAuthRequest {
  readonly type: typeof GET_AUTH_REQUEST;
}
export interface IGetAuthSuccess {
  readonly type: typeof GET_AUTH_SUCCESS;
}
export interface IGetAuthError {
  readonly type: typeof GET_AUTH_ERROR;
}
export type TAuth = IGetAuthRequest | IGetAuthSuccess | IGetAuthError;

export const getAuth =
  (token: string | null) =>
  (dispatch: TDispatch) => {
    dispatch({ type: GET_AUTH_REQUEST });
    if (token === null) {
      return null;
    } else
      return fetchGetAuth(token)
        .then((res) => dispatch({ type: GET_AUTH_SUCCESS, payload: res }))
        .catch((err) => dispatch({ type: GET_AUTH_ERROR, payload: err }));
  };
