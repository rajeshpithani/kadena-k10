webpackJsonp([6],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(48), RootInstanceProvider = __webpack_require__(49), ReactMount = __webpack_require__(36), React = __webpack_require__(7); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Spotfire = function () {\n  function Spotfire(container) {\n    var _this = this;\n\n    _classCallCheck(this, Spotfire);\n\n    // container is a card block\n    var serverUrl = 'https://spotfire.cloud.tibco.com/spotfire/wp/';\n    var analysisPath = '/Gallery/Mashup';\n    var parameters = '';\n    var reloadAnalysisInstance = false;\n    var dataset = container.dataset;\n    var containerId = container.id;\n\n    /* spotfire API from global */\n    this.customization = new spotfire.webPlayer.Customization(); // eslint-disable-line no-undef\n    this.initCustomization();\n\n    window.addEventListener('load', function () {\n      var app = new spotfire.webPlayer.Application( // eslint-disable-line no-undef\n      serverUrl, _this.customization, analysisPath, parameters, reloadAnalysisInstance);\n\n      var spotfireDoc = dataset.spotfireDoc,\n          spotfireFull = dataset.spotfireFull;\n\n\n      spotfireFull && _this.initFullScreenCustomization();\n\n      app.openDocument(containerId, spotfireDoc, _this.customization);\n    });\n  }\n\n  _createClass(Spotfire, [{\n    key: 'initCustomization',\n    value: function initCustomization() {\n      this.customization.showClose = false;\n      this.customization.showUndoRedo = true;\n      this.customization.showToolBar = false;\n      this.customization.showDodPanel = false;\n      this.customization.showStatusBar = false;\n      this.customization.showExportFile = false;\n      this.customization.showFilterPanel = false;\n      this.customization.showAnalysisInfo = true;\n      this.customization.showPageNavigation = false;\n      this.customization.showExportVisualization = false;\n    }\n  }, {\n    key: 'initFullScreenCustomization',\n    value: function initFullScreenCustomization() {\n      this.customization.showClose = true;\n      this.customization.showToolBar = true;\n      this.customization.showDodPanel = true;\n      this.customization.showStatusBar = true;\n      this.customization.showExportFile = true;\n      this.customization.showFilterPanel = true;\n      this.customization.showExportVisualization = true;\n    }\n  }]);\n\n  return Spotfire;\n}();\n\nexports.default = Spotfire;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(50); if (makeExportsHot(module, __webpack_require__(7))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdGF0aWMvc3BvdGZpcmUvaW5kZXguanM/MzNhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCJjOlxcXFxpbmV0cHViXFxcXHd3d3Jvb3RcXFxcS2FkZW5hLWsxMC1jb3JlXFxcXGZyb250ZW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxyZWFjdC1ob3QtYXBpXFxcXG1vZHVsZXNcXFxcaW5kZXguanNcIiksIFJvb3RJbnN0YW5jZVByb3ZpZGVyID0gcmVxdWlyZShcImM6XFxcXGluZXRwdWJcXFxcd3d3cm9vdFxcXFxLYWRlbmEtazEwLWNvcmVcXFxcZnJvbnRlbmRcXFxcbm9kZV9tb2R1bGVzXFxcXHJlYWN0LWhvdC1sb2FkZXJcXFxcUm9vdEluc3RhbmNlUHJvdmlkZXIuanNcIiksIFJlYWN0TW91bnQgPSByZXF1aXJlKFwicmVhY3QtZG9tL2xpYi9SZWFjdE1vdW50XCIpLCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTsgbW9kdWxlLm1ha2VIb3QgPSBtb2R1bGUuaG90LmRhdGEgPyBtb2R1bGUuaG90LmRhdGEubWFrZUhvdCA6IFJlYWN0SG90QVBJKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJvb3RJbnN0YW5jZVByb3ZpZGVyLmdldFJvb3RJbnN0YW5jZXMoUmVhY3RNb3VudCk7IH0sIFJlYWN0KTsgfSkoKTsgfSB0cnkgeyAoZnVuY3Rpb24gKCkge1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTcG90ZmlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3BvdGZpcmUoY29udGFpbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcG90ZmlyZSk7XG5cbiAgICAvLyBjb250YWluZXIgaXMgYSBjYXJkIGJsb2NrXG4gICAgdmFyIHNlcnZlclVybCA9ICdodHRwczovL3Nwb3RmaXJlLmNsb3VkLnRpYmNvLmNvbS9zcG90ZmlyZS93cC8nO1xuICAgIHZhciBhbmFseXNpc1BhdGggPSAnL0dhbGxlcnkvTWFzaHVwJztcbiAgICB2YXIgcGFyYW1ldGVycyA9ICcnO1xuICAgIHZhciByZWxvYWRBbmFseXNpc0luc3RhbmNlID0gZmFsc2U7XG4gICAgdmFyIGRhdGFzZXQgPSBjb250YWluZXIuZGF0YXNldDtcbiAgICB2YXIgY29udGFpbmVySWQgPSBjb250YWluZXIuaWQ7XG5cbiAgICAvKiBzcG90ZmlyZSBBUEkgZnJvbSBnbG9iYWwgKi9cbiAgICB0aGlzLmN1c3RvbWl6YXRpb24gPSBuZXcgc3BvdGZpcmUud2ViUGxheWVyLkN1c3RvbWl6YXRpb24oKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgIHRoaXMuaW5pdEN1c3RvbWl6YXRpb24oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFwcCA9IG5ldyBzcG90ZmlyZS53ZWJQbGF5ZXIuQXBwbGljYXRpb24oIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgIHNlcnZlclVybCwgX3RoaXMuY3VzdG9taXphdGlvbiwgYW5hbHlzaXNQYXRoLCBwYXJhbWV0ZXJzLCByZWxvYWRBbmFseXNpc0luc3RhbmNlKTtcblxuICAgICAgdmFyIHNwb3RmaXJlRG9jID0gZGF0YXNldC5zcG90ZmlyZURvYyxcbiAgICAgICAgICBzcG90ZmlyZUZ1bGwgPSBkYXRhc2V0LnNwb3RmaXJlRnVsbDtcblxuXG4gICAgICBzcG90ZmlyZUZ1bGwgJiYgX3RoaXMuaW5pdEZ1bGxTY3JlZW5DdXN0b21pemF0aW9uKCk7XG5cbiAgICAgIGFwcC5vcGVuRG9jdW1lbnQoY29udGFpbmVySWQsIHNwb3RmaXJlRG9jLCBfdGhpcy5jdXN0b21pemF0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTcG90ZmlyZSwgW3tcbiAgICBrZXk6ICdpbml0Q3VzdG9taXphdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRDdXN0b21pemF0aW9uKCkge1xuICAgICAgdGhpcy5jdXN0b21pemF0aW9uLnNob3dDbG9zZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXN0b21pemF0aW9uLnNob3dVbmRvUmVkbyA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbWl6YXRpb24uc2hvd1Rvb2xCYXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93RG9kUGFuZWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93U3RhdHVzQmFyID0gZmFsc2U7XG4gICAgICB0aGlzLmN1c3RvbWl6YXRpb24uc2hvd0V4cG9ydEZpbGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93RmlsdGVyUGFuZWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93QW5hbHlzaXNJbmZvID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93UGFnZU5hdmlnYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93RXhwb3J0VmlzdWFsaXphdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luaXRGdWxsU2NyZWVuQ3VzdG9taXphdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGdWxsU2NyZWVuQ3VzdG9taXphdGlvbigpIHtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93Q2xvc2UgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21pemF0aW9uLnNob3dUb29sQmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93RG9kUGFuZWwgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21pemF0aW9uLnNob3dTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21pemF0aW9uLnNob3dFeHBvcnRGaWxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9taXphdGlvbi5zaG93RmlsdGVyUGFuZWwgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21pemF0aW9uLnNob3dFeHBvcnRWaXN1YWxpemF0aW9uID0gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3BvdGZpcmU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNwb3RmaXJlO1xuXG4vKiBSRUFDVCBIT1QgTE9BREVSICovIH0pLmNhbGwodGhpcyk7IH0gZmluYWxseSB7IGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBmb3VuZFJlYWN0Q2xhc3NlcyA9IG1vZHVsZS5ob3QuZGF0YSAmJiBtb2R1bGUuaG90LmRhdGEuZm91bmRSZWFjdENsYXNzZXMgfHwgZmFsc2U7IGlmIChtb2R1bGUuZXhwb3J0cyAmJiBtb2R1bGUubWFrZUhvdCkgeyB2YXIgbWFrZUV4cG9ydHNIb3QgPSByZXF1aXJlKFwiYzpcXFxcaW5ldHB1YlxcXFx3d3dyb290XFxcXEthZGVuYS1rMTAtY29yZVxcXFxmcm9udGVuZFxcXFxub2RlX21vZHVsZXNcXFxccmVhY3QtaG90LWxvYWRlclxcXFxtYWtlRXhwb3J0c0hvdC5qc1wiKTsgaWYgKG1ha2VFeHBvcnRzSG90KG1vZHVsZSwgcmVxdWlyZShcInJlYWN0XCIpKSkgeyBmb3VuZFJlYWN0Q2xhc3NlcyA9IHRydWU7IH0gdmFyIHNob3VsZEFjY2VwdE1vZHVsZSA9IHRydWUgJiYgZm91bmRSZWFjdENsYXNzZXM7IGlmIChzaG91bGRBY2NlcHRNb2R1bGUpIHsgbW9kdWxlLmhvdC5hY2NlcHQoZnVuY3Rpb24gKGVycikgeyBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgYXBwbHkgaG90IHVwZGF0ZSB0byBcIiArIFwiaW5kZXguanNcIiArIFwiOiBcIiArIGVyci5tZXNzYWdlKTsgfSB9KTsgfSB9IG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkgeyBkYXRhLm1ha2VIb3QgPSBtb2R1bGUubWFrZUhvdDsgZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyA9IGZvdW5kUmVhY3RDbGFzc2VzOyB9KTsgfSkoKTsgfSB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3N0YXRpYy9zcG90ZmlyZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

});