import { TIngredient, nullTIngredient } from "../../types/ingredient";
import { TSelectedIngredientAction } from "../../types/selected-ingredient";
import {
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT,
} from "../actions/selected-ingredient";

const initialState: TIngredient = nullTIngredient
export const selectedIngredient = (
  state = initialState,
  action: TSelectedIngredientAction
): TIngredient => {
  switch (action.type) {
    case SELECT_INGREDIENT:
      return action.payload;
    case UNSELECT_INGREDIENT:
      return initialState;
    default:
      return state;
  }
};
