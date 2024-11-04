/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { put, takeLatest } from "redux-saga/effects";
import { generalApi } from "@/services/general.api";
import { setStats, setLoading, setError } from "./slice/dashboard";

function* fetchDashboardDataSaga(): Generator<any, void, any> {
  try {
    yield put(setLoading(true));
    const response = yield put(
      generalApi.endpoints.getDashboardData.initiate({})
    );

    if (response?.data) {
      yield put(setStats(response.data));
    } else {
      yield put(setError("Failed to fetch data"));
    }
  } catch (error) {
    yield put(setError("Failed to fetch data"));
  } finally {
    yield put(setLoading(false));
  }
}

function* watchFetchDashboardData() {
  yield takeLatest("FETCH_DASHBOARD_DATA", fetchDashboardDataSaga);
}

export default function* rootSaga() {
  yield watchFetchDashboardData();
}
