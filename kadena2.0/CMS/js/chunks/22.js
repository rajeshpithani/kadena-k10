webpackJsonp([22,39],{331:function(module,exports,__webpack_require__){try{(function(){"use strict";function removeProps(obj,props){var objRemovedProps=Object.assign({},obj);return props.forEach(function(prop){delete objRemovedProps[prop]}),objRemovedProps}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=removeProps}).call(this)}finally{}},335:function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function CheckboxInput(props){var error=props.error,label=props.label,inputClass=props.inputClass,disabled=props.disabled,type=props.type,inputProps=(0,_object2.default)(props,["error","label","inputClass"]),labelElement=label?_react2.default.createElement("label",{htmlFor:props.id,className:"input__label input__label--"+type},label):null,wrapClass=disabled?"input__wrapper input__wrapper--disabled ":"input__wrapper",errorElement=error?_react2.default.createElement("span",{className:"input__error"},error):null;return _react2.default.createElement("div",{className:wrapClass},_react2.default.createElement("input",_extends({className:(inputClass||"")+" input__"+type+" "},inputProps)),labelElement,errorElement)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};exports.default=CheckboxInput;var _react=__webpack_require__(20),_react2=_interopRequireDefault(_react),_object=__webpack_require__(331),_object2=_interopRequireDefault(_object);CheckboxInput.propTypes={id:_react.PropTypes.string.isRequired,label:_react.PropTypes.string.isRequired,type:_react.PropTypes.string.isRequired,name:_react.PropTypes.string,disabled:_react.PropTypes.bool,error:_react.PropTypes.string,inputClass:_react.PropTypes.string,defaultChecked:_react.PropTypes.bool,value:_react.PropTypes.bool}}).call(this)}finally{}}});