(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
	_classCallCheck(this, ChatApp);

	_wsClient2.default.init('ws://localhost:3001');
	_wsClient2.default.registerOpenHandler(function () {
		var message = new ChatMessage({ message: 'Pow!' });
		_wsClient2.default.sendMessage(message.serialize());
	});
	_wsClient2.default.registerMessageHandler(function (data) {
		console.log(data);
	});
};

var ChatMessage = function () {
	function ChatMessage(_ref) {
		var m = _ref.message,
		    _ref$user = _ref.user,
		    u = _ref$user === undefined ? 'batman' : _ref$user,
		    _ref$timestamp = _ref.timestamp,
		    t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

		_classCallCheck(this, ChatMessage);

		this.message = m;
		this.user = u;
		this.timestamp = t;
	}

	_createClass(ChatMessage, [{
		key: 'serialize',
		value: function serialize() {
			return {
				user: this.user,
				message: this.message,
				timestamp: this.timestamp
			};
		}
	}]);

	return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var socket = void 0;

function init(url) {
	socket = new WebSocket(url);
	console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
	socket.onopen = function () {
		console.log('open');
		handlerFunction();
	};
}

function registerMessageHandler(handlerFunction) {
	socket.onmessage = function (e) {
		console.log('message', e.data);
		var data = JSON.parse(e.data);
		handlerFunction(data);
	};
}

function sendMessage(payLoad) {
	socket.send(JSON.stringify(payLoad));
}

exports.default = {
	init: init,
	registerOpenHandler: registerOpenHandler,
	registerMessageHandler: registerMessageHandler,
	sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0wsbUJBQWM7QUFBQTs7QUFDYixvQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxvQkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQ2hDLE1BQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBRSxTQUFTLE1BQVgsRUFBaEIsQ0FBZDtBQUNBLHFCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0EsRUFIRDtBQUlBLG9CQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3ZDLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxFQUZEO0FBR0EsQzs7SUFHSSxXO0FBQ0wsNEJBSUc7QUFBQSxNQUhPLENBR1AsUUFIRixPQUdFO0FBQUEsdUJBRkYsSUFFRTtBQUFBLE1BRkksQ0FFSiw2QkFGTSxRQUVOO0FBQUEsNEJBREYsU0FDRTtBQUFBLE1BRFMsQ0FDVCxrQ0FEWSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDWDs7QUFBQTs7QUFDRixPQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBOzs7OzhCQUNXO0FBQ1gsVUFBTztBQUNOLFVBQU0sS0FBSyxJQURMO0FBRU4sYUFBUyxLQUFLLE9BRlI7QUFHTixlQUFXLEtBQUs7QUFIVixJQUFQO0FBS0E7Ozs7OztrQkFLYSxPOzs7OztBQ3BDZjs7Ozs7O0FBQ0E7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDbEIsVUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxTQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM3QyxRQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQixVQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDQSxFQUhEO0FBSUE7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUNoRCxRQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDekIsVUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixFQUFFLElBQXpCO0FBQ0EsTUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0Esa0JBQWdCLElBQWhCO0FBQ0EsRUFKRDtBQUtBOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM3QixRQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDQTs7a0JBRWM7QUFDZCxXQURjO0FBRWQseUNBRmM7QUFHZCwrQ0FIYztBQUlkO0FBSmMsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XG5cbmNsYXNzIENoYXRBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuXHRcdHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcblx0XHRcdGxldCBtZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKHsgbWVzc2FnZTogJ1BvdyEnfSk7XG5cdFx0XHRzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XG5cdFx0fSk7XG5cdFx0c29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdG1lc3NhZ2U6IG0sXG5cdFx0dXNlcjogdT0nYmF0bWFuJyxcblx0XHR0aW1lc3RhbXA6IHQ9KG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuXHR9KSB7XG5cdFx0dGhpcy5tZXNzYWdlID0gbTtcblx0XHR0aGlzLnVzZXIgPSB1O1xuXHRcdHRoaXMudGltZXN0YW1wID0gdDtcblx0fVxuXHRzZXJpYWxpemUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVzZXI6IHRoaXMudXNlcixcblx0XHRcdG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcblx0XHRcdHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcblx0XHR9O1xuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwOyIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcbm5ldyBDaGF0QXBwKCk7IiwibGV0IHNvY2tldDtcblxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcblx0c29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXHRjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuXHRzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdvcGVuJyk7XG5cdFx0aGFuZGxlckZ1bmN0aW9uKCk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG5cdHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZS5kYXRhKTtcblx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcblx0XHRoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5TG9hZCkge1xuXHRzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlMb2FkKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdCxcblx0cmVnaXN0ZXJPcGVuSGFuZGxlcixcblx0cmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcblx0c2VuZE1lc3NhZ2Vcbn0iXX0=
