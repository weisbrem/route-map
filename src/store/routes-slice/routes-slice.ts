import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RoutesData } from '../../components/Table/Table-data.interface';

interface InitialState {
  routes: RoutesData | null;
}

const initialState: InitialState = {
  routes: null,
};

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes: (state, action: PayloadAction<RoutesData>) => {
      state.routes = action.payload;
    },
  },
});

export const { setRoutes } = routesSlice.actions;
