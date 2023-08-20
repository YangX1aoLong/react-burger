import { fetchLogin } from "../../utils/get-data";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

export const getLogin =
  (email: string, password: string): any =>
  (dispatch: any) => {
    dispatch({ type: GET_LOGIN_REQUEST });
    return fetchLogin(email, password)
      .then((res) => dispatch({ type: GET_LOGIN_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: GET_LOGIN_ERROR, payload: err }));
  };
