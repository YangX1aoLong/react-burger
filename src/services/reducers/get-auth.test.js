import {
  GET_AUTH_ERROR,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
} from "../actions/get-auth";
import { getAuth } from "./get-auth";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

describe("auth reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = getAuth(initialState, {
      type: GET_AUTH_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return tokens and user", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      data: {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        success: true,
        user: {
          email: "email",
          name: "azat",
        },
      },
    };
    const received = getAuth(initialState, {
      type: GET_AUTH_SUCCESS,
      payload: {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        success: true,
        user: {
          email: "email",
          name: "azat",
        },
      },
    });
    expect(received).toEqual(expected);
  });

  test("should return error", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      error: "error",
    };
    const received = getAuth(initialState, {
      type: GET_AUTH_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
