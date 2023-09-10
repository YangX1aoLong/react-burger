import { createReducer } from "@reduxjs/toolkit";
import {  wsClose, wsConnecting, wsError, wsMessage, wsOpen } from "../actions/feed";
import { WebsocketStatus } from "../../types/temp";
import { TFeed } from "../../types";

export type LiveTableStore = {
  status: string;  connectionError: string;
  data: TFeed | {};
};

const initialState: LiveTableStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  data: {},
};

export const feed = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = "";
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.data = action.payload;
    })
});