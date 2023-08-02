import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PolylineRouteData } from './polyline-slice.interface';

export interface PolylineRouteDataInitialState {
  polylineRoute: PolylineRouteData | null;
  selectRouteCoordinates: string | null;
  selectMapCoordinates: number[][] | null;
}

const initialState: PolylineRouteDataInitialState = {
  polylineRoute: null,
  selectRouteCoordinates: null,
  selectMapCoordinates: null,
};

export const polylineRouteSlice = createSlice({
  name: 'polylineRoute',
  initialState,
  reducers: {
    setPolylineData: (state, action: PayloadAction<PolylineRouteData>) => {
      console.log('action.payload', action.payload);

      state.polylineRoute = action.payload;
    },
    setSelectRouteCoordinates: (state, action: PayloadAction<string>) => {
      state.selectRouteCoordinates = action.payload;
    },
    setSelectMapCoordinates: (state, action: PayloadAction<number[][]>) => {
      state.selectMapCoordinates = action.payload;
    },
  },
});

export const { setPolylineData, setSelectRouteCoordinates, setSelectMapCoordinates } =
  polylineRouteSlice.actions;
