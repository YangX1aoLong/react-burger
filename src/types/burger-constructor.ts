import { TIngredient, TIngredientWithCount } from "./ingredient";

export type TBurgerConstructorAction = {
  type: string;
  payload: any;
};
export type TBurgerConstructorState = {
  bun: TIngredientWithCount;
  mains: TIngredientWithCount[];
};

export type TIngredientConstructor = TIngredient & {
  id: number;
};
export type TIngredientConstructorSort = {
  type: string;
  payload: {
    hoverIngredient: TIngredientConstructor;
    ingredient: TIngredientConstructor;
  };
};
export type TItemIngredient = {
  ingredient: TIngredientWithCount;
};
