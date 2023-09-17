import { mockIngredientsRequest } from "../../utils/mock-data";
import { GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../actions/ingredients";
import { ingredients } from "./ingredients";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

describe("ingredients reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = ingredients(initialState, {
      type: GET_INGREDIENTS_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return success", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      data: mockIngredientsRequest,
    };
    const received = ingredients(initialState, {
      type: GET_INGREDIENTS_SUCCESS,
      payload: mockIngredientsRequest,
    });
    expect(received).toEqual(expected);
  });

  test("should return error", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      error: "error",
    };
    const received = ingredients(initialState, {
      type: GET_INGREDIENTS_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
