import pg from 'pg';
import config from '../config.js';

const pgPool = new pg.Pool({
	connectionString: config.databaseUrl,
});

export default pgPool;
