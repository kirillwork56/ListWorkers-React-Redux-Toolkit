import { createSlice } from "@reduxjs/toolkit";

export interface AppStateI {
  loading: boolean;
  error: string | null;
}

const initialState: AppStateI = {
  loading: false,
  error: null,
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, endLoading } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
