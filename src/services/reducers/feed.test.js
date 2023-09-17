import { nullTFeed } from "../../types/feed";
import { WebsocketStatus } from "../../types/temp";
import { mockOrdersRequest } from "../../utils/mock-data";
import { wsClose, wsError, wsMessage, wsOpen } from "../actions/feed";
import { feed } from "./feed";

const initialState = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  data: nullTFeed,
};

describe("feed reducer", () => {
  test("should return message", () => {
    const expected = {
      ...initialState,
      data: mockOrdersRequest,
    };
    const received = feed(initialState, {
      type: wsMessage,
      payload: mockOrdersRequest,
    });
    expect(received).toEqual(expected);
  });

  test("should return error", () => {
    const expected = {
      ...initialState,
      connectionError: "connection error",
    };
    const received = feed(initialState, {
      type: wsError,
      payload: "connection error",
    });
    expect(received).toEqual(expected);
  });

  test("should return online", () => {
    const expected = {
      ...initialState,
      status: WebsocketStatus.ONLINE,
    };
    const received = feed(initialState, {
      type: wsOpen,
    });
    expect(received).toEqual(expected);
  });

  test("should return offline", () => {
    const expected = {
      ...initialState,
      status: WebsocketStatus.OFFLINE,
    };
    const received = feed(initialState, {
      type: wsClose,
    });
    expect(received).toEqual(expected);
  });
});
