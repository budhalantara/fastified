import pino from 'pino';
import config from '../config.js';
import fs from 'fs';

if (!fs.existsSync(config.fileLogPath)) {
	await fs.promises.mkdir(config.fileLogPath);
}

function getOptions(options = {}) {
	if (!config.isProduction) {
		// development logger options
		options = {
			...options,
			transport: {
				target: 'pino-pretty',
			},
		};
	}

	return options;
}

export const defaultLogger = pino(getOptions({ name: 'default' }));
