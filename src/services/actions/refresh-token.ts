import { TDispatch } from "../../types/socket";
import { fetchRefreshToken } from "../../utils/get-data";

export const GET_REFRESH_TOKEN_REQUEST = "GET_REFRESH_TOKEN_REQUEST";
export const GET_REFRESH_TOKEN_SUCCESS = "GET_REFRESH_TOKEN_SUCCESS";
export const GET_REFRESH_TOKEN_ERROR = "GET_REFRESH_TOKEN_ERROR";

export const getRefreshToken =
  (token: string | null) =>
  (dispatch: TDispatch) => {
    dispatch({ type: GET_REFRESH_TOKEN_REQUEST });
    if (token === null) {
      return null;
    } else
      return fetchRefreshToken(token)
        .then((res) =>
          dispatch({ type: GET_REFRESH_TOKEN_SUCCESS, payload: res })
        )
        .catch((err) =>
          dispatch({ type: GET_REFRESH_TOKEN_ERROR, payload: err })
        );
  };
