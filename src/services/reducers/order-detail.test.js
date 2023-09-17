import { mockOrderDetail } from "../../utils/mock-data";
import {
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../actions/order-detail";
import { orderDetail } from "./order-detail";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};
describe("order reducer", () => {
  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = orderDetail(initialState, {
      type: GET_ORDER_REQUEST,
    });
    expect(received).toEqual(expected);
  });

  test("should return order", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      data: mockOrderDetail,
    };
    const received = orderDetail(initialState, {
      type: GET_ORDER_SUCCESS,
      payload: mockOrderDetail,
    });
    expect(received).toEqual(expected);
  });

  test("should return error", () => {
    const expected = {
      ...initialState,
      isLoading: false,
      error: "error",
    };
    const received = orderDetail(initialState, {
      type: GET_ORDER_ERROR,
      payload: "error",
    });
    expect(received).toEqual(expected);
  });
});
