import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,  
} from "../actions/login";
import { GET_LOGOUT_ERROR, GET_LOGOUT_REQUEST, GET_LOGOUT_SUCCESS } from "../actions/logout";
import { login } from "./login";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};
describe("login reducer", () => {
  test("should return login isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = login(initialState, {
      type: GET_LOGIN_REQUEST,
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
    const received = login(initialState, {
      type: GET_LOGIN_SUCCESS,
      payload: {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        success: true,
        user: { email: "email", name: "azat" },
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
    const received = login(initialState, {
      type: GET_LOGIN_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });

  test("should return logout isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = login(initialState, {
      type: GET_LOGOUT_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return data null", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      data: null,
    };
    const received = login(initialState, {
      type: GET_LOGOUT_SUCCESS,
    });
    expect(received).toEqual(expected);
  });

  test("should return logout error", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      error: "error",
    };
    const received = login(initialState, {
      type: GET_LOGOUT_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
