webpackJsonp([13,28],{347:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\\\inetpub\\\\wwwroot\\\\Kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-api\\\\modules\\\\index.js"), RootInstanceProvider = require("c:\\\\inetpub\\\\wwwroot\\\\Kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = separate;\nfunction separate(str) {\n  if (str.length < 4) return str;\n\n  var array = Array.from(str);\n  var formattedArray = [];\n\n  array.reverse().forEach(function (item, index) {\n    if (!(index % 3) && index) formattedArray.push(\' \');\n    formattedArray.push(item);\n  });\n\n  return formattedArray.reverse().join(\'\');\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\\\inetpub\\\\wwwroot\\\\Kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "numbers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWxwZXJzL251bWJlcnMuanM/N2M5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCJjOlxcXFxpbmV0cHViXFxcXHd3d3Jvb3RcXFxcS2FkZW5hLWsxMC1jb3JlXFxcXGZyb250ZW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxyZWFjdC1ob3QtYXBpXFxcXG1vZHVsZXNcXFxcaW5kZXguanNcIiksIFJvb3RJbnN0YW5jZVByb3ZpZGVyID0gcmVxdWlyZShcImM6XFxcXGluZXRwdWJcXFxcd3d3cm9vdFxcXFxLYWRlbmEtazEwLWNvcmVcXFxcZnJvbnRlbmRcXFxcbm9kZV9tb2R1bGVzXFxcXHJlYWN0LWhvdC1sb2FkZXJcXFxcUm9vdEluc3RhbmNlUHJvdmlkZXIuanNcIiksIFJlYWN0TW91bnQgPSByZXF1aXJlKFwicmVhY3QtZG9tL2xpYi9SZWFjdE1vdW50XCIpLCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTsgbW9kdWxlLm1ha2VIb3QgPSBtb2R1bGUuaG90LmRhdGEgPyBtb2R1bGUuaG90LmRhdGEubWFrZUhvdCA6IFJlYWN0SG90QVBJKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJvb3RJbnN0YW5jZVByb3ZpZGVyLmdldFJvb3RJbnN0YW5jZXMoUmVhY3RNb3VudCk7IH0sIFJlYWN0KTsgfSkoKTsgfSB0cnkgeyAoZnVuY3Rpb24gKCkge1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzZXBhcmF0ZTtcbmZ1bmN0aW9uIHNlcGFyYXRlKHN0cikge1xuICBpZiAoc3RyLmxlbmd0aCA8IDQpIHJldHVybiBzdHI7XG5cbiAgdmFyIGFycmF5ID0gQXJyYXkuZnJvbShzdHIpO1xuICB2YXIgZm9ybWF0dGVkQXJyYXkgPSBbXTtcblxuICBhcnJheS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICBpZiAoIShpbmRleCAlIDMpICYmIGluZGV4KSBmb3JtYXR0ZWRBcnJheS5wdXNoKCcgJyk7XG4gICAgZm9ybWF0dGVkQXJyYXkucHVzaChpdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZEFycmF5LnJldmVyc2UoKS5qb2luKCcnKTtcbn1cblxuLyogUkVBQ1QgSE9UIExPQURFUiAqLyB9KS5jYWxsKHRoaXMpOyB9IGZpbmFsbHkgeyBpZiAobW9kdWxlLmhvdCkgeyAoZnVuY3Rpb24gKCkgeyB2YXIgZm91bmRSZWFjdENsYXNzZXMgPSBtb2R1bGUuaG90LmRhdGEgJiYgbW9kdWxlLmhvdC5kYXRhLmZvdW5kUmVhY3RDbGFzc2VzIHx8IGZhbHNlOyBpZiAobW9kdWxlLmV4cG9ydHMgJiYgbW9kdWxlLm1ha2VIb3QpIHsgdmFyIG1ha2VFeHBvcnRzSG90ID0gcmVxdWlyZShcImM6XFxcXGluZXRwdWJcXFxcd3d3cm9vdFxcXFxLYWRlbmEtazEwLWNvcmVcXFxcZnJvbnRlbmRcXFxcbm9kZV9tb2R1bGVzXFxcXHJlYWN0LWhvdC1sb2FkZXJcXFxcbWFrZUV4cG9ydHNIb3QuanNcIik7IGlmIChtYWtlRXhwb3J0c0hvdChtb2R1bGUsIHJlcXVpcmUoXCJyZWFjdFwiKSkpIHsgZm91bmRSZWFjdENsYXNzZXMgPSB0cnVlOyB9IHZhciBzaG91bGRBY2NlcHRNb2R1bGUgPSB0cnVlICYmIGZvdW5kUmVhY3RDbGFzc2VzOyBpZiAoc2hvdWxkQWNjZXB0TW9kdWxlKSB7IG1vZHVsZS5ob3QuYWNjZXB0KGZ1bmN0aW9uIChlcnIpIHsgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGFwcGx5IGhvdCB1cGRhdGUgdG8gXCIgKyBcIm51bWJlcnMuanNcIiArIFwiOiBcIiArIGVyci5tZXNzYWdlKTsgfSB9KTsgfSB9IG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkgeyBkYXRhLm1ha2VIb3QgPSBtb2R1bGUubWFrZUhvdDsgZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyA9IGZvdW5kUmVhY3RDbGFzc2VzOyB9KTsgfSkoKTsgfSB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hlbHBlcnMvbnVtYmVycy5qc1xuLy8gbW9kdWxlIGlkID0gMzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMgMjgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=')},357:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\\\inetpub\\\\wwwroot\\\\Kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-api\\\\modules\\\\index.js"), RootInstanceProvider = require("c:\\\\inetpub\\\\wwwroot\\\\Kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _numbers = __webpack_require__(347);\n\nvar _numbers2 = _interopRequireDefault(_numbers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar NumFormat = function NumFormat(container) {\n  _classCallCheck(this, NumFormat);\n\n  var str = container.innerHTML;\n  container.innerHTML = (0, _numbers2.default)(str);\n};\n\nexports.default = NumFormat;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\\\inetpub\\\\wwwroot\\\\Kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdGF0aWMvbnVtLWZvcm1hdC9pbmRleC5qcz80ZGFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFJFQUNUIEhPVCBMT0FERVIgKi8gaWYgKG1vZHVsZS5ob3QpIHsgKGZ1bmN0aW9uICgpIHsgdmFyIFJlYWN0SG90QVBJID0gcmVxdWlyZShcImM6XFxcXGluZXRwdWJcXFxcd3d3cm9vdFxcXFxLYWRlbmEtazEwLWNvcmVcXFxcZnJvbnRlbmRcXFxcbm9kZV9tb2R1bGVzXFxcXHJlYWN0LWhvdC1hcGlcXFxcbW9kdWxlc1xcXFxpbmRleC5qc1wiKSwgUm9vdEluc3RhbmNlUHJvdmlkZXIgPSByZXF1aXJlKFwiYzpcXFxcaW5ldHB1YlxcXFx3d3dyb290XFxcXEthZGVuYS1rMTAtY29yZVxcXFxmcm9udGVuZFxcXFxub2RlX21vZHVsZXNcXFxccmVhY3QtaG90LWxvYWRlclxcXFxSb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC1kb20vbGliL1JlYWN0TW91bnRcIiksIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpOyBtb2R1bGUubWFrZUhvdCA9IG1vZHVsZS5ob3QuZGF0YSA/IG1vZHVsZS5ob3QuZGF0YS5tYWtlSG90IDogUmVhY3RIb3RBUEkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUm9vdEluc3RhbmNlUHJvdmlkZXIuZ2V0Um9vdEluc3RhbmNlcyhSZWFjdE1vdW50KTsgfSwgUmVhY3QpOyB9KSgpOyB9IHRyeSB7IChmdW5jdGlvbiAoKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9udW1iZXJzID0gcmVxdWlyZSgnLi4vLi4vaGVscGVycy9udW1iZXJzJyk7XG5cbnZhciBfbnVtYmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXJzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE51bUZvcm1hdCA9IGZ1bmN0aW9uIE51bUZvcm1hdChjb250YWluZXIpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bUZvcm1hdCk7XG5cbiAgdmFyIHN0ciA9IGNvbnRhaW5lci5pbm5lckhUTUw7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAoMCwgX251bWJlcnMyLmRlZmF1bHQpKHN0cik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOdW1Gb3JtYXQ7XG5cbi8qIFJFQUNUIEhPVCBMT0FERVIgKi8gfSkuY2FsbCh0aGlzKTsgfSBmaW5hbGx5IHsgaWYgKG1vZHVsZS5ob3QpIHsgKGZ1bmN0aW9uICgpIHsgdmFyIGZvdW5kUmVhY3RDbGFzc2VzID0gbW9kdWxlLmhvdC5kYXRhICYmIG1vZHVsZS5ob3QuZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyB8fCBmYWxzZTsgaWYgKG1vZHVsZS5leHBvcnRzICYmIG1vZHVsZS5tYWtlSG90KSB7IHZhciBtYWtlRXhwb3J0c0hvdCA9IHJlcXVpcmUoXCJjOlxcXFxpbmV0cHViXFxcXHd3d3Jvb3RcXFxcS2FkZW5hLWsxMC1jb3JlXFxcXGZyb250ZW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxyZWFjdC1ob3QtbG9hZGVyXFxcXG1ha2VFeHBvcnRzSG90LmpzXCIpOyBpZiAobWFrZUV4cG9ydHNIb3QobW9kdWxlLCByZXF1aXJlKFwicmVhY3RcIikpKSB7IGZvdW5kUmVhY3RDbGFzc2VzID0gdHJ1ZTsgfSB2YXIgc2hvdWxkQWNjZXB0TW9kdWxlID0gdHJ1ZSAmJiBmb3VuZFJlYWN0Q2xhc3NlczsgaWYgKHNob3VsZEFjY2VwdE1vZHVsZSkgeyBtb2R1bGUuaG90LmFjY2VwdChmdW5jdGlvbiAoZXJyKSB7IGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihcIkNhbm5vdCBhcHBseSBob3QgdXBkYXRlIHRvIFwiICsgXCJpbmRleC5qc1wiICsgXCI6IFwiICsgZXJyLm1lc3NhZ2UpOyB9IH0pOyB9IH0gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7IGRhdGEubWFrZUhvdCA9IG1vZHVsZS5tYWtlSG90OyBkYXRhLmZvdW5kUmVhY3RDbGFzc2VzID0gZm91bmRSZWFjdENsYXNzZXM7IH0pOyB9KSgpOyB9IH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc3RhdGljL251bS1mb3JtYXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9')}});