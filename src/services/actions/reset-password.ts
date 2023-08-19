import { fetchResetPassword } from "../../utils/get-data";

export const GET_RESET_PASSWORD_REQUEST = "GET_RESET_PASSWORD_REQUEST";
export const GET_RESET_PASSWORD_SUCCESS = "GET_RESET_PASSWORD_SUCCESS";
export const GET_RESET_PASSWORD_ERROR = "GET_RESET_PASSWORD_ERROR";

export const getResetPassword = (pass:string,token:string):any => (dispatch:any) => {
  dispatch({ type: GET_RESET_PASSWORD_REQUEST });
  return fetchResetPassword(pass,token)
    .then((res) => dispatch({ type: GET_RESET_PASSWORD_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: GET_RESET_PASSWORD_ERROR, payload: err }));
};
