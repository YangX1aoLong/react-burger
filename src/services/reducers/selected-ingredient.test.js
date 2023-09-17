import { nullTIngredient } from "../../types/ingredient";
import {
  mockIngredientsRequest,
} from "../../utils/mock-data";
import {
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT,
} from "../actions/selected-ingredient";
import { selectedIngredient } from "./selected-ingredient";

const initialState = nullTIngredient;
const ingredient = mockIngredientsRequest[0];
describe("select reducer", () => {
  test("should return isLoading:true", () => {
    const expected = ingredient;

    const received = selectedIngredient(initialState, {
      type: SELECT_INGREDIENT,
      payload: ingredient,
    });
    expect(received).toEqual(expected);
  });

  test("should return success", () => {
    const expected = {
      ...initialState,
    };
    const received = selectedIngredient(initialState, {
      type: UNSELECT_INGREDIENT,
    });
    expect(received).toEqual(expected);
  });
});
