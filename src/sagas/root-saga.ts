import { CallEffect, PutEffect, call, put, takeEvery } from 'redux-saga/effects';
import { setRoutes } from '../store/routes-slice/routes-slice';
import { RoutesData } from '../components/Table/Table-data.interface';
import { getAllRoutes } from '../services';

function* fetchAllRoutes(): Generator<CallEffect | PutEffect | RoutesData, void, RoutesData> {
  try {
    const res = yield call(getAllRoutes);

    yield put(setRoutes(res));
  } catch (error) {
    console.log('err', error);
  }
}

function* watchFetchRouteSage() {
  yield takeEvery('route/getAllRoutes', fetchAllRoutes);
}

function* rootSaga() {
  yield watchFetchRouteSage();
}

export default rootSaga;
