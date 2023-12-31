import { TDispatch } from "../../types/socket";
import { fetchIngredients } from "../../utils/get-data";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";
export const GET_INGREDIENT = "GET_INGREDIENT";

export const getIngredients = () => (dispatch: TDispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  return fetchIngredients()
    .then((res) => {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res });
    })
    .catch((err) => dispatch({ type: GET_INGREDIENTS_ERROR, payload: err }));
};
