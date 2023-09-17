import { nullTIngredientWithCount } from "../../types/ingredient";
import {
  mockCounsturctor,
  mockCounsturctorWithoutMain,
  mockIngredientBun,
  mockIngredientMain,
} from "../../utils/mock-data";
import {
  ADD_INGREDIENT,
  DELETE_ALL_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/burger-constructor";
import { burgerConstructor } from "./burger-constructor";

const initialState = mockCounsturctor;
const initialStateNull = {
  bun: nullTIngredientWithCount,
  mains: [],
};
describe("constructor reducer", () => {
  test("should return bun", () => {
    const expected = {
      ...initialState,
      bun: mockIngredientBun,
    };
    const received = burgerConstructor(initialState, {
      type: ADD_INGREDIENT,
      payload: mockIngredientBun,
    });
    expect(received).toEqual(expected);
  });

  test("should return main", () => {
    const expected = {
      ...initialState,
      mains: [...initialState.mains, mockIngredientMain],
    };
    const received = burgerConstructor(initialState, {
      type: ADD_INGREDIENT,
      payload: mockIngredientMain,
    });
    expect(received).toEqual(expected);
  });

  test("should return without deleted ingredient", () => {
    const expected = mockCounsturctorWithoutMain;
    const received = burgerConstructor(initialState, {
      type: DELETE_INGREDIENT,
      payload: mockIngredientMain.id,
    });
    expect(received).toEqual(expected);
  });

  test("should return empty data", () => {
    const expected = initialStateNull;
    const received = burgerConstructor(initialState, {
      type: DELETE_ALL_INGREDIENT,
    });
    expect(received).toEqual(expected);
  });

});
