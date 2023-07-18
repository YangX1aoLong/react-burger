import {
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT,
} from "../actions/selected-ingredient";

const initialState = {};
export const selectedIngredient = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT:
      return action.payload;
    case UNSELECT_INGREDIENT:
      return initialState;
    default:
      return state;
  }
};
