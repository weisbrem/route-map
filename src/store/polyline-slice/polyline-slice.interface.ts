export interface PolylineRouteData {
  code: string;
  routes: Route[];
  waypoints: Waypoint[];
}

export interface Route {
  geometry: string;
  legs: Leg[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface Leg {
  steps: unknown[];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface Waypoint {
  hint: string;
  distance: number;
  name: string;
  location: number[];
}
