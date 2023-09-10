import { Action, ActionCreator } from "redux";
import { RootState, store } from "../services/store/store";
import { ThunkAction } from "redux-thunk";

export type TInputType = "text" | "email" | "password" | undefined;
export type TInputIcon =
  | "CurrencyIcon"
  | "BurgerIcon"
  | "LockIcon"
  | "DragIcon"
  | "DeleteIcon"
  | "ArrowUpIcon"
  | "ArrowDownIcon"
  | "MenuIcon"
  | "CloseIcon"
  | "CheckMarkIcon"
  | "ListIcon"
  | "ProfileIcon"
  | "HideIcon"
  | "ShowIcon"
  | undefined;
export type TServerResopnse<T> = {
  success: boolean;
} & T;

export type TIngredientsResponse = TServerResopnse<{ data: TIngredient[] }>;
export type TAuthResponse = TServerResopnse<{
  user: { email: string; name: string };
}>;
export interface IAuthAction {
  type: string;
  payload: TAuthResponse;
}
export type TMessageResponse = TServerResopnse<{ message: string }>;
export type TTokenResponse = TServerResopnse<{
  accessToken: string;
  refreshToken: string;
}>;
export type TLoginResponse = TTokenResponse & TAuthResponse;
export type TOrderResponse = TServerResopnse<{
  name: string;
  order: {
    number: number;
  };
}>;
export type TLoginActions = {
  type: string;
  payload: TLoginResponse;
};

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TLoginActions>
>;

export type TDispatch = typeof store.dispatch;
export type TFeedOrder = {
  createdAt: string;
  ingredients: Array<string>;
  number: number;
  name: string;
  status: string;
  updatedAt: string;
  _id: string;
};
export type TItemIngredient = {
  ingredient: TIngredientConstructor;
};
export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
};
export interface IIngredientsAction {
  type:string;
  payload:TIngredient[]|string;
}

export type TIngredientConstructor = TIngredient & {
  id: number;
};
export type TIngredientConstructorAction = {
  type: string;
  payload: TIngredientConstructor;
};
export type TIngredientConstructorActionSort = {
  type: string;
  payload: {
    hoverIngredient: TIngredientConstructor;
    ingredient: TIngredientConstructor;
  };
};
export type TFeed = {
  success: boolean;
  orders: {
    ingredients: string[];
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updateAt: string;
  }[];
  total: number;
  totalToday: number;
};

