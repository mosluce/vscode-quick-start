'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash');
var request = require('request');

function getUrl() {
    return new _promise2.default(function (resolve, reject) {
        request('https://www.google.com', function (error, res, data) {
            if (error) return reject(error);

            resolve(data);
        });
    });
}

(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var html;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return getUrl();

                case 3:
                    html = _context.sent;

                    console.log(html);
                    _context.next = 10;
                    break;

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0);

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[0, 7]]);
}))();
//# sourceMappingURL=main.js.map