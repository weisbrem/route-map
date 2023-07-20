interface Points {
  [key: string]: number[];
}

interface Route {
  key: number;
  name: string;
  route: string;
  points: Points[];
}

export interface RoutesData {
  [key: string]: Route[];
}
