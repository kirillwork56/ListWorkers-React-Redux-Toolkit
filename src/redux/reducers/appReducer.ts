import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkersAPI } from "api";
import { PersonI } from "types/PersonI";

export interface AppStateI {
  isLoading: boolean;
  error: string | null;
  personArr: PersonI[] | null;
  sort: "withoutSort" | "exp";
}

const initialState: AppStateI = {
  isLoading: false,
  error: null,
  personArr: null,
  sort: "withoutSort",
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
  reducers: {
    sortPersonArr: (state, action: PayloadAction<"withoutSort" | "exp">) => {
      state.sort = action.payload;
      if (action.payload === "exp" && state.personArr !== null) {
        state.personArr = state.personArr
          .sort((a, b) => a.experience - b.experience)
          .reverse();
      }
    },
  },
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

export const { sortPersonArr } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
