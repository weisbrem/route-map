import {
  CallEffect,
  PutEffect,
  SelectEffect,
  call,
  fork,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';

import { getAllRoutes, getPolylineRouteData } from '../services';

import { setRoutes } from '../store/routes-slice/routes-slice';
import {
  PolylineRouteDataInitialState,
  setPolylineData,
} from '../store/polyline-slice/polyline-slice';

import { RoutesData } from '../components/Table/Table-data.interface';
import { PolylineRouteData } from '../store/polyline-slice/polyline-slice.interface';
import { AppState } from '../store/store.interface';

export function selectState<T>(selector: (s: AppState) => T): SelectEffect {
  return select(selector);
}

function* fetchPolylineRoute(): Generator<
  CallEffect | PutEffect | PolylineRouteData | SelectEffect | PolylineRouteDataInitialState,
  void,
  PolylineRouteData
> {
  try {
    const selectRouteCoordinates = yield selectState(
      ({ polylineRoute }) => polylineRoute.selectRouteCoordinates
    );
    const res = yield call(getPolylineRouteData, selectRouteCoordinates as unknown as string);

    yield put(setPolylineData(res));
  } catch (error) {
    console.log('err', error);
  }
}

function* watchfetchPolylineRouteSaga() {
  yield takeEvery('routes/getPolylineRoute', fetchPolylineRoute);
}

function* fetchAllRoutes(): Generator<CallEffect | PutEffect | RoutesData, void, RoutesData> {
  try {
    const res = yield call(getAllRoutes);

    yield put(setRoutes(res));
  } catch (error) {
    console.log('err', error);
  }
}

function* watchFetchRouteSaga() {
  yield takeEvery('routes/getAllRoutes', fetchAllRoutes);
}

function* rootSaga() {
  yield fork(watchFetchRouteSaga);
  yield fork(watchfetchPolylineRouteSaga);
}

export default rootSaga;
