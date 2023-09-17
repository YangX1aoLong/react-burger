import {
  GET_FORGOT_PASSWORD_ERROR,
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
} from "../actions/forgot-password";
import { forgotPassword } from "./forgot-password";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};
describe("forgot reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = forgotPassword(initialState, {
      type: GET_FORGOT_PASSWORD_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return success", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      data: "message",
    };
    const received = forgotPassword(initialState, {
      type: GET_FORGOT_PASSWORD_SUCCESS,
      payload: "message",
    });
    expect(received).toEqual(expected);
  });

  test("should return error", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      error: "error",
    };
    const received = forgotPassword(initialState, {
      type: GET_FORGOT_PASSWORD_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
