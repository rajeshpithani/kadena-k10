webpackJsonp([46],{333:function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Breadcrumbs(props){var crumbs=props.crumbs,items=crumbs.map(function(crumb){var title=crumb.title,link=crumb.link;return _react2.default.createElement("a",{key:title,href:link},title)});return _react2.default.createElement("div",{className:"breadcrumbs"},items)}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(20),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(48),_propTypes2=_interopRequireDefault(_propTypes);Breadcrumbs.propTypes={crumbs:_propTypes2.default.array.isRequired},exports.default=Breadcrumbs}).call(this)}finally{}}});