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
export type TIngredientState = {
  data: TIngredient[];
  error: any;
  isLoading: boolean;
};
export type TIngredientsAction = {
  type: string;
  payload: TIngredient[];
};

export type TIngredientWithCount = TIngredient & {
  count: number;
  id: string;
};
export const nullTIngredient = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  image: "",
  image_large: "",
  image_mobile: "",
  name: "",
  price: 0,
  proteins: 0,
  type: "",
  __v: 0,
  _id: "",
};
export const nullTIngredientWithCount = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  image: "",
  image_large: "",
  image_mobile: "",
  name: "",
  price: 0,
  proteins: 0,
  type: "",
  __v: 0,
  _id: "",
  count: 0,
  id: "",
};
