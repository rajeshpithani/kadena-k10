webpackJsonp([59,90],{349:function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Page(props){var url=props.url,title=props.title;return _react2.default.createElement("a",{href:url},title)}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(21),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(37),_propTypes2=_interopRequireDefault(_propTypes);Page.propTypes={url:_propTypes2.default.string.isRequired,title:_propTypes2.default.string.isRequired},exports.default=Page}).call(this)}finally{}},358:function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(21),_react2=_interopRequireDefault(_react),_Search=__webpack_require__(349),_Search2=_interopRequireDefault(_Search),SearchPages=function(_Component){function SearchPages(){return _classCallCheck(this,SearchPages),_possibleConstructorReturn(this,(SearchPages.__proto__||Object.getPrototypeOf(SearchPages)).apply(this,arguments))}return _inherits(SearchPages,_Component),_createClass(SearchPages,[{key:"render",value:function(){var pages=this.props.pages,url=pages.url,items=pages.items,filteredItems=items.filter(function(item,index){return index<3}),pagesList=filteredItems.map(function(item){return _react2.default.createElement("li",{key:item.id},_react2.default.createElement(_Search2.default,item))});return items.length?_react2.default.createElement("div",null,_react2.default.createElement("div",{className:"search__header"},_react2.default.createElement("h2",null,"Pages"),_react2.default.createElement("a",{href:url},"Show all pages")),_react2.default.createElement("ul",{className:"search__result-pages"},pagesList)):null}}]),SearchPages}(_react.Component);exports.default=SearchPages}).call(this)}finally{}}});