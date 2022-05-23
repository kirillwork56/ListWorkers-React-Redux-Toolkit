import { createSlice } from "@reduxjs/toolkit";

export interface AppStateI {}

const initialState: AppStateI = {};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
