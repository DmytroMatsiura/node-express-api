import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class ValidateMiddleware implements IMiddleware {
	constructor(private classToValidate: ClassConstructor<object>) {}

	execute({ body }: Request, res: Response, next: NextFunction): void {
		if (typeof body === 'object' && body !== null) {
			const instance = plainToInstance(this.classToValidate, body);
			validate(instance).then((errors) => {
				if (errors.length > 0) {
					res.status(422).send(errors);
				} else {
					next();
				}
			});
		} else {
			res
				.status(422)
				.send([{ property: 'body', constraints: { isObject: 'body must be an object' } }]);
		}
	}
}
