import Fastify from 'fastify';
import fastifyEtag from '@fastify/etag';
import config from './config.js';
import customErrorHandler from './utils/customErrorHandler.js';
import customNotFoundHandler from './utils/customNotFoundHandler.js';
import { defaultLogger } from './utils/logger.js';
import fastifyCors from '@fastify/cors';
import decorateReply from './plugins/decorateReply.js';
import todoRoutes from './app/todo/routes.js';

const fastify = Fastify({ logger: defaultLogger, trustProxy: true });

fastify.setErrorHandler(customErrorHandler);
fastify.setNotFoundHandler(customNotFoundHandler);

fastify.register(decorateReply);
fastify.register(fastifyEtag);
fastify.register(fastifyCors, {
	origin: config.corsAllowedOrigin,
});

fastify.register(todoRoutes);

await fastify.listen({
	port: config.port,
	host: config.host,
});
