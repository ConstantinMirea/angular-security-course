

import {Request, Response, NextFunction} from "express";
import { decodeJwt } from "./security.utils";
export function retrievedUserIdFromRequest(request: Request, response: Response, next: NextFunction) {
  const jwt = request.cookies['SESSIONID'];

  if (jwt) {
    handleSessionCookie(jwt, request);

  }
  next();
}

async function handleSessionCookie(jwt: string, request: Request) {
  const payload = await decodeJwt(jwt);

  req["userId"] =  payload.sub();
}
