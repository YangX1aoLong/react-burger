import { TIngredient } from "../../types";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SORT_INGREDIENT = "SORT_INGREDIENT";
export const DELETE_ALL_INGREDIENT = "DELETE_ALL_INGREDIENT";

export const addIngredient = (ingredient: TIngredient) => ({
  type: ADD_INGREDIENT,
  payload: { ...ingredient, id: Math.random() },
});

export const deleteIngredient = (ingredientId: number) => ({
  type: DELETE_INGREDIENT,
  payload: ingredientId,
});

export const deleteAllIngredient:any = (ingredientId: number) => ({
  type: DELETE_ALL_INGREDIENT,
  payload: ingredientId,
});

export const sortIngredient = (
  ingredient: TIngredient,
  hoverIngredient: TIngredient
) => ({
  type: SORT_INGREDIENT,
  payload: { ingredient: ingredient, hoverIngredient: hoverIngredient },
});
