'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
var BSJumbotron = require('react-bootstrap/lib/Jumbotron');
var React = require('react');
Object.assign = require('react/lib/Object.assign');

var _default = (function (_React$Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  };

  _inherits(_class, _React$Component);

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        BSJumbotron,
        { style: Object.assign(this.props.style, {
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }) },
        React.createElement(
          'div',
          { style: { width: '100%', textAlign: 'center' } },
          this.props.children
        )
      );
    }
  }]);

  return _class;
})(React.Component);

exports['default'] = _default;
module.exports = exports['default'];

