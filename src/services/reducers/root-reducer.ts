import { combineReducers } from "redux";
import { ingredients } from "./ingredients";
import { burgerConstructor } from "./burger-constructor";
import { selectedIngredient } from "./selected-ingredient";
import { orderDetail } from "./order-detail";
import { forgotPassword } from "./forgot-password";
import { resetPassword } from "./reset-password";
import { registration } from "./registration";
import { login } from "./login";
import { refreshToken } from "./refresh-token";
import { getAuth } from "./get-auth";
import { updateAuth } from "./update-auth";
import { feed } from "./feed";
export const rootReducer = combineReducers({
  ingredients: ingredients,
  burgerConstructor: burgerConstructor,
  selectedIngredient: selectedIngredient,
  orderDetail: orderDetail,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword,
  registration: registration,
  login: login,
  refreshToken: refreshToken,
  getAuth: getAuth,
  updateAuth: updateAuth,
  feed: feed,
});

