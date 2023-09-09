import { createReducer } from "@reduxjs/toolkit";
import {
  UPDATE_AUTH_ERROR,
  UPDATE_AUTH_REQUEST,
  UPDATE_AUTH_SUCCESS,
} from "../actions/update-auth";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};
export const updateAuth = createReducer(initialState, (builder) => {
  builder
    .addCase(UPDATE_AUTH_REQUEST, (state) => {
      state.isLoading = true;
    })
    .addCase(UPDATE_AUTH_SUCCESS, (state, action: any) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(UPDATE_AUTH_ERROR, (state, action: any) => {
      state.error = action.payload;
    });
});
