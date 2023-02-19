import fp from 'fastify-plugin';
import createResponse from '../utils/createResponse.js';

/** @type {import('fastify/types/plugin.js').FastifyPluginAsync} */
async function decorateReply(fastify) {
	/**
	 * Decorate reply with a 'success' prop
	 * accessible with reply.success
	 */
	fastify.decorateReply('success', function (params = {}) {
		this.code(200).send(
			createResponse({
				success: true,
				message: params.message,
				data: params.data,
			})
		);
	});

	/**
	 * Decorate reply with a 'created' prop
	 * accessible with reply.created
	 */
	fastify.decorateReply('created', function (params = {}) {
		this.code(201).send(
			createResponse({
				success: true,
				message: params.message,
				data: params.data,
			})
		);
	});
}

export default fp(decorateReply);
