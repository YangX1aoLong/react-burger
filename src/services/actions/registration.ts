import { TDispatch } from "../../types/socket";
import { fetchRegistration } from "../../utils/get-data";

export const GET_REGISTRATION_REQUEST = "GET_REGISTRATION_REQUEST";
export const GET_REGISTRATION_SUCCESS = "GET_REGISTRATION_SUCCESS";
export const GET_REGISTRATION_ERROR = "GET_REGISTRATION_ERROR";

export const getRegistration =
  (email: string, password: string, name: string) => (dispatch: TDispatch) => {
    dispatch({ type: GET_REGISTRATION_REQUEST });
    return fetchRegistration(email, password, name)
      .then((res) => dispatch({ type: GET_REGISTRATION_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: GET_REGISTRATION_ERROR, payload: err }));
  };
