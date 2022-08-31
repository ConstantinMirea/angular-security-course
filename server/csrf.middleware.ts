import {Request, Response, NextFunction} from "express";

export function checkCsrfToken(req: Request, res: Response, next: NextFunction){
const csrCokkie = req.cookies["XSRF-TOKEN"];

const csrfHeader = req.headers["x-xsrf-token"];

if(csrCokkie && csrfHeader && csrCokkie ===csrfHeader) {
next()
} else {
  res.sendStatus(403);
}


}
