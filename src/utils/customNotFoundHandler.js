import createResponse from './createResponse.js';

export default function customNotFoundHandler(request, reply) {
	reply.status(404).send(
		createResponse({
			message: `Route ${request.method}:${request.url} not found`,
		})
	);
}
