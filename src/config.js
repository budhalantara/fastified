import 'dotenv/config';
import * as yup from 'yup';
import path from 'path';
import { fileURLToPath } from 'url';

const schema = yup.object({
	NODE_ENV: yup.string(),
	PORT: yup.string(),
	HOST: yup.string(),
	DATABASE_URL: yup.string().required(),
	CORS_ALLOWED_ORIGIN: yup.string(),
});

const env = await schema.validate(process.env, { abortEarly: false }).catch((err) => {
	console.error('env validation error');
	console.error(err.errors?.join('\n'));
	process.exit(1);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const corsAllowedOrigin = env.CORS_ALLOWED_ORIGIN ? env.CORS_ALLOWED_ORIGIN.split(',') : [];

export default {
	isProduction: env.NODE_ENV === 'production',
	port: env.PORT || 3000,
	host: env.HOST || '127.0.0.1',
	databaseUrl: env.DATABASE_URL,
	corsAllowedOrigin,
	fileLogPath: path.resolve(__dirname, '../logs'),
};
