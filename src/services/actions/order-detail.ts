import { fetchOrder } from "../../utils/get-data";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrder:any = (data:any) => (dispatch:any) => {
  dispatch({ type: GET_ORDER_REQUEST });
  return fetchOrder(data)
    .then((res) => dispatch({ type: GET_ORDER_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: GET_ORDER_ERROR, payload: err }));
};
