import todoRepository from './repository.js';

const todoService = {
	async getAll() {
		const todos = await todoRepository.findAll();
		return todos.map((todo) => {
			const is_finished = !!todo.finished_at;
			const is_late = !is_finished && todo.deadline_at < new Date();
			return {
				id: todo.id,
				name: todo.name,
				deadline_at: todo.deadline_at,
				created_at: todo.created_at,
				finished_at: todo.finished_at,
				deleted_at: todo.deleted_at,
				is_finished,
				is_late,
			};
		});
	},

	async getById(id) {
		const todo = await todoRepository.findById(id);
		if (!todo) {
			return;
		}

		const is_finished = !!todo.finished_at;
		const is_late = !is_finished && todo.deadline_at < new Date();
		return {
			id: todo.id,
			name: todo.name,
			deadline_at: todo.deadline_at,
			created_at: todo.created_at,
			finished_at: todo.finished_at,
			deleted_at: todo.deleted_at,
			is_finished,
			is_late,
		};
	},
};

export default todoService;
