import { combineReducers } from '@reduxjs/toolkit';

import { routesSlice } from './routes-slice/routes-slice';
import { polylineRouteSlice } from './polyline-slice/polyline-slice';

export const rootReducer = combineReducers({
  routes: routesSlice.reducer,
  polylineRoute: polylineRouteSlice.reducer,
});
