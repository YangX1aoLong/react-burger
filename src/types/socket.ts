import { store } from "../services/store/store";
import { TIngredient } from "./ingredient";

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
  success: boolean;
}>;
export type TMessageResponse = TServerResopnse<{
  message: string;
  success: true;
}>;
export type TTokenResponse = TServerResopnse<{
  accessToken: string;
  refreshToken: string;
  success: boolean;
}>;
export type TLoginResponse = TTokenResponse & TAuthResponse;
export type TOrderResponse = TServerResopnse<{
  name: string;
  order: {
    number: number;
  };
}>;
export type TError = {
  success: boolean;
  message: string;
};

export type TFeedOrder = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updateAt: string;
  name:string;
};

export type TFeed = {
  success: boolean;
  orders: TFeedOrder[];
  total: number;
  totalToday: number;
};
export type TDispatch = typeof store.dispatch;