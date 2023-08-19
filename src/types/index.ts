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

export type TIngredientConstructor = TIngredient & {
  id: number;
};
