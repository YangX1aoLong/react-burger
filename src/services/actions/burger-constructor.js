export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: { ...ingredient, id: Math.random() },
});

export const deleteIngredient = (ingredient) =>({
    type:DELETE_INGREDIENT,
    payload: ingredient,
})