import todoController from './controller.js';

/** @type {import('fastify/types/plugin.js').FastifyPluginAsync} */
export default async function todoRoutes(fastify, opts) {
	fastify.get('/todos', todoController.getAll);
	fastify.get('/todos/:id', todoController.getById);
}
