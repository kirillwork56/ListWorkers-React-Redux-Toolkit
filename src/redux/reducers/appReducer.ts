import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkersAPI } from "api";
import { PersonI } from "types/PersonI";

export interface AppStateI {
  isLoading: boolean;
  error: string | null;
  personArr: PersonI[] | null;
  person: PersonI | null;
  sort: "withoutSort" | "exp";
}

const initialState: AppStateI = {
  isLoading: false,
  error: null,
  personArr: null,
  person: null,
  sort: "withoutSort",
};

export const fetchWorkersAT = createAsyncThunk(
  "app/fetchWorkersAC",
  async (_, thunkAPI) => {
    try {
      const data = await WorkersAPI.getWorkers();
      if (typeof data === "string") throw data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchOneWorkerAT = createAsyncThunk(
  "app/fetchOneWorkerAT",
  async (id: number, thunkAPI) => {
    try {
      const data = await WorkersAPI.getOneWorker(id);
      if (typeof data === "string") throw data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
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
    //fetchWorkersAT =============================

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

    // fetchOneWorkerAT =============================

    [fetchOneWorkerAT.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchOneWorkerAT.fulfilled.type]: (
      state,
      action: PayloadAction<PersonI>
    ) => {
      state.isLoading = false;
      state.person = action.payload;
    },

    [fetchOneWorkerAT.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { sortPersonArr } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
