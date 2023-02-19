export default function createResponse({ success = false, message, data, errors }) {
	return {
		success,
		message,
		data,
		errors,
	};
}
