webpackJsonp([51,80],{340:function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(21),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(37),Price=(_interopRequireDefault(_propTypes),function(_Component){function Price(){return _classCallCheck(this,Price),_possibleConstructorReturn(this,(Price.__proto__||Object.getPrototypeOf(Price)).apply(this,arguments))}return _inherits(Price,_Component),_createClass(Price,[{key:"render",value:function(){var _props=this.props,title=_props.title,value=_props.value,className=_props.className;return _react2.default.createElement("div",{className:className},_react2.default.createElement("span",{className:"summary-table__info"},title),_react2.default.createElement("span",{className:"summary-table__line"}),_react2.default.createElement("span",{className:"summary-table__amount"},value))}}]),Price}(_react.Component));exports.default=Price}).call(this)}finally{}},344:function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_react=__webpack_require__(21),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(37),_propTypes2=_interopRequireDefault(_propTypes),_PriceRow=__webpack_require__(340),_PriceRow2=_interopRequireDefault(_PriceRow),PriceTable=function(_ref){var items=_ref.items,prices=items.map(function(item,index){var className="summary-table__row";return index===items.length-1&&(className+=" summary-table__amount--emphasized"),_react2.default.createElement(_PriceRow2.default,_extends({className:className,key:item.title},item))});return _react2.default.createElement("div",{className:"summary-table"},prices)};PriceTable.propTypes={items:_propTypes2.default.array.isRequired},exports.default=PriceTable}).call(this)}finally{}}});