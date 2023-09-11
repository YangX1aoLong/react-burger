import { TIngredient } from "../../types/ingredient";

export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const UNSELECT_INGREDIENT = "UNSELECT_INGREDIENT";

export const selectIngredient = (ingredient: TIngredient) => ({
  type: SELECT_INGREDIENT,
  payload: ingredient,
});

export const unselectIngredient = () => ({
  type: UNSELECT_INGREDIENT,
});
