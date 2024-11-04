import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const generalApi = createApi({
  reducerPath: "generalApi",
  baseQuery,
  tagTypes: ["stats"],
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => "/dashboardData.json",
      providesTags: ["stats"],
    }),
  }),
});

export const { useGetDashboardDataQuery } = generalApi;
