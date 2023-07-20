interface Route {
  key: number;
  name: string;
  route: string;
  points: Points;
}

interface Points {
  [key: string]: number[];
}

export interface TableData {
  [key: string]: Route[];
}
