import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PersonI } from "types/PersonI";

const API_URL = process.env.REACT_APP_API_URL || "";

export const workersApi = createApi({
  reducerPath: "workerApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    getWorkers: builder.query<PersonI[], number>({
      query: (limit: number = 10) => ({
        url: `workers`,
        params: {
          _limit: limit,
        },
      }),
    }),
    getOneWorker: builder.query<PersonI, string>({
      query: (id) => `workers/${id}`,
    }),
  }),
});

export const { useGetWorkersQuery, useGetOneWorkerQuery } = workersApi;
