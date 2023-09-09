import { fetchUpdateAuth } from "../../utils/get-data";

export const UPDATE_AUTH_REQUEST = "UPDATE_AUTH_REQUEST";
export const UPDATE_AUTH_SUCCESS = "UPDATE_AUTH_SUCCESS";
export const UPDATE_AUTH_ERROR = "UPDATE_AUTH_ERROR";

export const updateAuth:any =
  (
    token: string | null,
    name: string | null,
    email: string | null,
    password: string | null
  ) =>
  (dispatch: any) => {
    dispatch({ type: UPDATE_AUTH_REQUEST });
    if (token === null) {
      return null;
    } else
      return fetchUpdateAuth(token, name, email, password)
        .then((res) => dispatch({ type: UPDATE_AUTH_SUCCESS, payload: res }))
        .catch((err) => dispatch({ type: UPDATE_AUTH_ERROR, payload: err }));
  };

  