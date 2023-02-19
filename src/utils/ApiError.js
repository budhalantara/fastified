export default class ApiError extends Error {
	constructor({ message, httpCode, errors }) {
		super(message || 'ApiError');
		this.httpCode = httpCode;
		this.errors = errors;
	}
}

export function badRequestError({ message = 'Bad Request', errors }) {
	return new ApiError({ httpCode: 400, message, errors });
}

export function unauthorizedError({ message = 'Unauthorized', errors }) {
	return new ApiError({ httpCode: 401, message, errors });
}

export function notFoundError({ message = 'Not Found' }) {
	return new ApiError({ httpCode: 404, message });
}

export function unprocessableError({ message = 'Unprocessable Entity', errors }) {
	return new ApiError({ httpCode: 422, message, errors });
}
