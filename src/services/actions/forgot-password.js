import { fetchForgotPassword } from "../../utils/get-data";

export const GET_FORGOT_PASSWORD_REQUEST = "GET_FORGOT_PASSWORD_REQUEST";
export const GET_FORGOT_PASSWORD_SUCCESS = "GET_FORGOT_PASSWORD_SUCCESS";
export const GET_FORGOT_PASSWORD_ERROR = "GET_FORGOT_PASSWORD_ERROR";

export const getForgotPassword = (email) => (dispatch) => {
  dispatch({ type: GET_FORGOT_PASSWORD_REQUEST });
  return fetchForgotPassword(email)
    .then((res) =>
      dispatch({ type: GET_FORGOT_PASSWORD_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: GET_FORGOT_PASSWORD_ERROR, payload: err })
    );
};
