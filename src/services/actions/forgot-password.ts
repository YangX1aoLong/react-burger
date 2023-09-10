import { fetchForgotPassword } from "../../utils/get-data";
import { TDispatch } from "../../types";

export const GET_FORGOT_PASSWORD_REQUEST = "GET_FORGOT_PASSWORD_REQUEST";
export const GET_FORGOT_PASSWORD_SUCCESS = "GET_FORGOT_PASSWORD_SUCCESS";
export const GET_FORGOT_PASSWORD_ERROR = "GET_FORGOT_PASSWORD_ERROR";

export const getForgotPassword:any = (email: string) => (dispatch: TDispatch) => {
  dispatch({ type: GET_FORGOT_PASSWORD_REQUEST });
  return fetchForgotPassword(email)
    .then((res) =>
      dispatch({ type: GET_FORGOT_PASSWORD_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: GET_FORGOT_PASSWORD_ERROR, payload: err })
    );
};

