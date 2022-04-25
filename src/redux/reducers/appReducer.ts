import { createSlice } from "@reduxjs/toolkit";
import { PersonI } from "types/PersonI";

const HARDCORE = [
  {
    createdAt: "2022-04-24T22:33:02.106Z",
    name: "Owen Raynor",
    country: "Saudi Arabia",
    email: "Abraham82@yahoo.com",
    experience: 4,
    jobTitle: "Direct Accountability Designer",
    id: "1",
  },
  {
    createdAt: "2022-04-24T11:42:45.153Z",
    name: "May Smith",
    country: "Sao Tome and Principe",
    email: "Chyna60@gmail.com",
    experience: 9,
    jobTitle: "District Group Representative",
    id: "2",
  },
  {
    createdAt: "2022-04-24T03:49:27.926Z",
    name: "Dr. Bradford Conn",
    country: "Mali",
    email: "Tremaine.Carroll@hotmail.com",
    experience: 2,
    jobTitle: "Lead Solutions Producer",
    id: "3",
  },
  {
    createdAt: "2022-04-24T12:58:26.298Z",
    name: "Brandon Morissette DVM",
    country: "Namibia",
    email: "Lucinda_Bernhard56@hotmail.com",
    experience: 2,
    jobTitle: "Dynamic Mobility Associate",
    id: "4",
  },
  {
    createdAt: "2022-04-24T06:17:36.588Z",
    name: "Ms. Zachary Jerde",
    country: "Swaziland",
    email: "Kayley_Stark@yahoo.com",
    experience: 4,
    jobTitle: "Future Markets Assistant",
    id: "5",
  },
  {
    createdAt: "2022-04-24T05:09:39.686Z",
    name: "Kristina Trantow",
    country: "Tanzania",
    email: "Ludie.Medhurst15@hotmail.com",
    experience: 6,
    jobTitle: "National Branding Agent",
    id: "6",
  },
  {
    createdAt: "2022-04-24T15:43:55.826Z",
    name: "Della Treutel",
    country: "Finland",
    email: "Kirstin.Strosin28@yahoo.com",
    experience: 5,
    jobTitle: "Dynamic Infrastructure Analyst",
    id: "7",
  },
  {
    createdAt: "2022-04-24T10:00:50.372Z",
    name: "Gilberto Armstrong",
    country: "French Southern Territories",
    email: "Broderick19@gmail.com",
    experience: 7,
    jobTitle: "Chief Research Planner",
    id: "8",
  },
  {
    createdAt: "2022-04-24T07:23:38.336Z",
    name: "Harold Deckow",
    country: "Solomon Islands",
    email: "Brenda_Sporer@hotmail.com",
    experience: 13,
    jobTitle: "Dynamic Marketing Associate",
    id: "9",
  },
  {
    createdAt: "2022-04-24T14:26:35.445Z",
    name: "Cory Gislason",
    country: "Uganda",
    email: "Gilda.Cartwright@yahoo.com",
    experience: 5,
    jobTitle: "Dynamic Research Director",
    id: "10",
  },
];

export interface AppStateI {
  loading: boolean;
  error: string | null;
  personArr: PersonI[] | null;
}

const initialState: AppStateI = {
  loading: false,
  error: null,
  personArr: HARDCORE, //!HARDCORE
};

export const appSlice = createSlice({
  name: "app",
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
