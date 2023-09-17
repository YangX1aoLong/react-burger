import { GET_REGISTRATION_ERROR, GET_REGISTRATION_REQUEST, GET_REGISTRATION_SUCCESS } from "../actions/registration";
import { registration } from "./registration";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};
describe("registration reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = registration(initialState, {
      type: GET_REGISTRATION_REQUEST,
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
    const received = registration(initialState, {
      type: GET_REGISTRATION_SUCCESS,
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
    const received = registration(initialState, {
      type: GET_REGISTRATION_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
