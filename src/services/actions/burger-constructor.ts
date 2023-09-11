import { createAction } from "@reduxjs/toolkit";
import { TIngredient } from "../../types/ingredient";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SORT_INGREDIENT = "SORT_INGREDIENT";
export const DELETE_ALL_INGREDIENT = "DELETE_ALL_INGREDIENT";

export const addIngredient = createAction(
  ADD_INGREDIENT,
  (ingredient: TIngredient) => {
    return {
      payload: { ...ingredient, id: Math.random() },
    };
  }
);

export const deleteIngredient = createAction<number, typeof DELETE_INGREDIENT>(
  DELETE_INGREDIENT
);
export const deleteAllIngredient = createAction(DELETE_ALL_INGREDIENT);
export const sortIngredient = createAction(
  SORT_INGREDIENT,
  (ingredient: TIngredient, hoverIngredient: TIngredient) => {
    return {
      type: SORT_INGREDIENT,
      payload: { ingredient: ingredient, hoverIngredient: hoverIngredient },
    };
  }
);
