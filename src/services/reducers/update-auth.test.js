import { UPDATE_AUTH_ERROR, UPDATE_AUTH_REQUEST, UPDATE_AUTH_SUCCESS } from "../actions/update-auth";
import { updateAuth } from "./update-auth";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};
describe("update reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = updateAuth(initialState, {
      type: UPDATE_AUTH_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return token", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      data: {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        success: true,
      },
    };
    const received = updateAuth(initialState, {
      type: UPDATE_AUTH_SUCCESS,
      payload: {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        success: true,
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
    const received = updateAuth(initialState, {
      type: UPDATE_AUTH_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
