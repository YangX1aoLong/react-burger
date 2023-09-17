import { GET_REFRESH_TOKEN_ERROR, GET_REFRESH_TOKEN_REQUEST, GET_REFRESH_TOKEN_SUCCESS } from "../actions/refresh-token";
import { refreshToken } from "./refresh-token";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

describe("refresh reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = refreshToken(initialState, {
      type: GET_REFRESH_TOKEN_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return token and user", () => {
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
    const received = refreshToken(initialState, {
      type: GET_REFRESH_TOKEN_SUCCESS,
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
    const received = refreshToken(initialState, {
      type: GET_REFRESH_TOKEN_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
