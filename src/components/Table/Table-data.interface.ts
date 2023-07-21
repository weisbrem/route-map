interface Points {
  [key: string]: number[];
}

export interface Route {
  key: number;
  name: string;
  routeName: string;
  points: Points[];
}

export interface RoutesData {
  [key: string]: Route;
}
