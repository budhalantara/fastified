import { ValidationError } from 'yup';
import ApiError from './ApiError.js';
import createResponse from './createResponse.js';

export default function customErrorHandler(error, request, reply) {
	if (error instanceof ValidationError) {
		reply.status(400).send(
			createResponse({
				message: 'Validation Error',
				errors: error.errors,
			})
		);
	} else if (error instanceof ApiError) {
		reply.status(error.httpCode).send(
			createResponse({
				message: error.message,
				errors: error.errors,
			})
		);
	} else if (error.statusCode < 500) {
		reply.status(error.statusCode).send(
			createResponse({
				message: error.message,
			})
		);
	} else {
		this.log.error(error);
		reply.status(500).send(
			createResponse({
				message: 'Internal Server Error',
			})
		);
	}
}
