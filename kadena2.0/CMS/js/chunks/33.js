webpackJsonp([33,56],{334:function(module,exports,__webpack_require__){try{(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _config=config,localization=_config.localization,login=localization.login,checkout=localization.checkout,spotfire=localization.spotfire,userSettings=localization.userSettings;exports.LOGIN=login,exports.CHECKOUT=checkout,exports.SPOTFIRE=spotfire,exports.USER_SETTINGS=userSettings}).call(this)}finally{}},396:function(module,exports,__webpack_require__){try{(function(){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_globals=__webpack_require__(334),Spotfire=function(){function Spotfire(container){_classCallCheck(this,Spotfire);var id=container.id,dataset=container.dataset,url=dataset.url,serverUrl=_globals.SPOTFIRE.serverUrl;this.customisation=new spotfire.webPlayer.Customization,this.initCustomization();var app=new spotfire.webPlayer.Application(serverUrl,this.customisation,url,"",!1);app.openDocument(id,0,this.customisation)}return _createClass(Spotfire,[{key:"initCustomization",value:function(){this.customisation.showClose=!1,this.customisation.showUndoRedo=!0,this.customisation.showToolBar=!1,this.customisation.showDodPanel=!1,this.customisation.showStatusBar=!1,this.customisation.showExportFile=!1,this.customisation.showFilterPanel=!1,this.customisation.showAnalysisInfo=!0,this.customisation.showPageNavigation=!1,this.customisation.showExportVisualization=!1}}]),Spotfire}();exports.default=Spotfire}).call(this)}finally{}}});