import { FastifyPluginAsync } from 'fastify';

type Params = {
	message?: string;
	data?: any;
};

declare module 'fastify' {
	interface FastifyReply {
		success(params: Params): void;
		created(params: Params): void;
	}
}

declare const decorateReply: FastifyPluginAsync;
export default decorateReply;
