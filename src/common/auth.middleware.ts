import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		const authHeader = req.headers.authorization;
		if (typeof authHeader === 'string') {
			verify(authHeader.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload && typeof payload === 'object' && 'email' in payload) {
					req.user = (payload as { email: string }).email;
					next();
				} else {
					next();
				}
			});
		} else {
			next();
		}
	}
}
