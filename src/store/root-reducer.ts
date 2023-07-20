import { combineReducers } from '@reduxjs/toolkit';

import { routesSlice } from './routes-slice/routes-slice';

export const rootReducer = combineReducers({
  routes: routesSlice.reducer,
});
