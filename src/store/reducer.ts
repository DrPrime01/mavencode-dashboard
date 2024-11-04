import { combineReducers } from "@reduxjs/toolkit";

import DashboardReducer from "./slice/dashboard";
import { generalApi } from "@/services/general.api";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  [generalApi.reducerPath]: generalApi.reducer,
});

export default rootReducer;
