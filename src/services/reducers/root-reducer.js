import { combineReducers } from "redux";
import { ingredients } from "./ingredients";
import { burgerConstructor } from "./burger-constructor";
import { selectedIngredient } from "./selected-ingredient";
import { orderDetail } from "./order-detail";
export const rootReducer = combineReducers({
  ingredients: ingredients,
  burgerConstructor: burgerConstructor,
  selectedIngredient: selectedIngredient,
  orderDetail: orderDetail,
});
