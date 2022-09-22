import { Request, Response } from "express";

import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the user password
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send("Invalid email or password");

  // Create a session
  const session = createSession(user._id, req.get("userAgent") || "");

  // Create an access token
  // Create a refresh token
  // Return access and refresh tokens
}
