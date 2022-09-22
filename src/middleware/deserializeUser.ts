import { get } from "lodash";
import { Request, Response, NextFunction } from "express";

import { verifyJwt } from "../utils/jwt.utils";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) return next();
  console.log("Access token", accessToken);

  const { decoded } = verifyJwt(accessToken);
  console.log("Decoded token", decoded);

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
