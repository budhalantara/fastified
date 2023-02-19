import pgPool from '../../utils/pg.js';

const todoRepository = {
	async findAll() {
		const result = await pgPool.query(`
			SELECT
				id,
				name,
				deadline_at,
				created_at,
				finished_at
			FROM todos
			WHERE deleted_at IS NULL
		`);
		return result.rows;
	},

	async findById(id) {
		const result = await pgPool.query(
			`
				SELECT
					id,
					name,
					deadline_at,
					created_at,
					finished_at
				FROM todos
				WHERE
					id = $1
					AND deleted_at IS NULL
			`,
			[id]
		);
		return result.rows[0];
	},
};

export default todoRepository;
