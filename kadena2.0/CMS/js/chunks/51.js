webpackJsonp([51],{381:function(module,exports,__webpack_require__){try{(function(){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),AddTr=function(){function AddTr(container){var _this=this;_classCallCheck(this,AddTr),this.lastRow=container,this.count=1,this.tbody=this.lastRow.parentNode,this.firstRowClass="js-first-tr",this.firstRow=this.tbody.querySelector("."+this.firstRowClass),this.firstRowTemplate=this.firstRow.cloneNode(!0),Array.from(this.lastRow.getElementsByClassName("js-add-tr-toggler")).forEach(function(toggler){toggler.addEventListener("click",function(){_this.count+=1;var clonnedRow=_this.firstRowTemplate.cloneNode(!0),newNode=_this.getNewRow(clonnedRow);_this.tbody.insertBefore(newNode,_this.lastRow)})})}return _createClass(AddTr,[{key:"getNewRow",value:function(oldRow){var _this2=this;return oldRow.classList.remove(this.firstRowClass),Array.from(oldRow.querySelectorAll("[name]")).forEach(function(element){var name=element.dataset.name+"-"+_this2.count;element.name=name}),oldRow}}]),AddTr}();exports.default=AddTr}).call(this)}finally{}}});