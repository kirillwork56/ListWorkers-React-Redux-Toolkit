import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkersAPI } from "api";
import { PersonI } from "types/PersonI";

export interface AppStateI {
  isLoading: boolean;
  error: string | null;
  personArr: PersonI[] | null;
}

const initialState: AppStateI = {
  isLoading: false,
  error: null,
  personArr: null,
};

export const fetchWorkersAT = createAsyncThunk(
  "app/fetchWorkersAC",
  async (_, thunkAPI) => {
    try {
      return await WorkersAPI.getWorkers();
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWorkersAT.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchWorkersAT.fulfilled.type]: (
      state,
      action: PayloadAction<PersonI[]>
    ) => {
      state.isLoading = false;
      state.personArr = action.payload;
    },

    [fetchWorkersAT.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const appReducer = appSlice.reducer;
export default appReducer;
