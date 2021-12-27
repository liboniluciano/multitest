declare namespace Express {
  export interface Request {
    user: {
      name: string;
      mail: string;
    };
  }
}
