import { TIngredient } from "./ingredient";

export type TSelectedIngredientAction = {
    type:string;
    payload:TIngredient;
}
