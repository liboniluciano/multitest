import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../config/auth";

export interface TokenPayload {
  id: number;
  name: string;
  mail: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token has not provided " });
  }

  try {
    const [, token] = authHeader.split(" ");
    const decoded = await promisify(jwt.verify)(token, authConfig.secret || "");

    const { name, mail } = decoded as unknown as TokenPayload;

    req.user = {
      name,
      mail,
    };

    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token!" });
  }
};
