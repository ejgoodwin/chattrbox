let socket;

function init(url) {
	socket = new WebSocket(url);
	console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
	socket.onopen = () => {
		console.log('open');
		handlerFunction();
	};
}

function registerMessageHandler(handlerFunction) {
	socket.onmessage = (e) => {
		console.log('message', e.data);
		let data = JSON.parse(e.data);
		handlerFunction(data);
	}
}

function sendMessage(payLoad) {
	socket.send(JSON.stringify(payLoad));
}

export default {
	init,
	registerOpenHandler,
	registerMessageHandler,
	sendMessage
}