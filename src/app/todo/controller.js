import { notFoundError } from '../../utils/ApiError.js';
import todoService from './service.js';

const todoController = {
	/** @type {import('fastify/types/route.js').RouteHandlerMethod} */
	async getAll(request, reply) {
		const todos = await todoService.getAll();
		reply.success({
			data: todos,
		});
	},

	/** @type {import('fastify/types/route.js').RouteHandlerMethod} */
	async getById(request, reply) {
		const { id } = request.params;
		const todo = await todoService.getById(id);
		if (!todo) {
			throw notFoundError({ message: 'Todo not found' });
		}

		reply.success({
			data: todo,
		});
	},
};

export default todoController;
