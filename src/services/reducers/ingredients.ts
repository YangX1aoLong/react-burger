import { TIngredientState, TIngredientsAction } from "../../types/ingredient";
import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";

const initialState: TIngredientState = {
  data: [],
  error: null,
  isLoading: false,
};
export const ingredients = (
  state = initialState,
  action: TIngredientsAction
): TIngredientState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
