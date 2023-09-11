import { TBurgerConstructorAction, TBurgerConstructorState } from "../../types/burger-constructor";
import { TIngredientWithCount, nullTIngredientWithCount } from "../../types/ingredient";
import {
  ADD_INGREDIENT,
  DELETE_ALL_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENT,
} from "../actions/burger-constructor";

const initialState: TBurgerConstructorState = {
  bun: nullTIngredientWithCount,
  mains: [],
};

export const burgerConstructor = (
  state = initialState,
  action: TBurgerConstructorAction
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (typeof action.payload !== 'number')
        switch (action.payload?.type) {
          case "main":
            return { ...state, mains: [...state.mains, action.payload] };
          case "bun":
            return { ...state, bun: action.payload };
          case "sauce":
            return { ...state, mains: [...state.mains, action.payload] };
          default:
            return state;
        }
        else return state;
    case DELETE_INGREDIENT:
      return {
        ...state,
        mains: state.mains.filter(
          (i: TIngredientWithCount) => i.id !== action.payload
        ),
      };
    case SORT_INGREDIENT:
      const mains: TIngredientWithCount[] = [];
      for (let i = 0; i < state.mains.length; i++) {
        if (state.mains[i].id === action.payload.ingredient.id)
          mains.push(action.payload.hoverIngredient);
        else if (state.mains[i].id === action.payload.hoverIngredient.id)
          mains.push(action.payload.ingredient);
        else mains.push(state?.mains[i]);
      }
      return { ...state, mains: mains };
    case DELETE_ALL_INGREDIENT:
      return initialState;
    default:
      return state;
  }
};
