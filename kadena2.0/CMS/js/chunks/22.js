webpackJsonp([22],{358:function(module,exports,__webpack_require__){eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"c:\\\\Projects\\\\SourceTree\\\\kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-api\\\\modules\\\\index.js\"), RootInstanceProvider = require(\"c:\\\\Projects\\\\SourceTree\\\\kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\RootInstanceProvider.js\"), ReactMount = require(\"react-dom/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Password = function Password(container) {\n  _classCallCheck(this, Password);\n\n  var classInput = 'js-password-input';\n  var classToggler = 'js-password-toggler';\n\n  var input = container.querySelector('.' + classInput);\n  var toggler = container.querySelector('.' + classToggler);\n\n  var _toggler$dataset = toggler.dataset,\n      passwordShow = _toggler$dataset.passwordShow,\n      passwordHide = _toggler$dataset.passwordHide;\n\n\n  toggler.addEventListener('click', function () {\n    if (input.getAttribute('type') === 'text') {\n      input.setAttribute('type', 'password');\n      toggler.innerHTML = passwordShow;\n    } else {\n      input.setAttribute('type', 'text');\n      toggler.innerHTML = passwordHide;\n    }\n  });\n};\n\nexports.default = Password;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"c:\\\\Projects\\\\SourceTree\\\\kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdGF0aWMvcGFzc3dvcmQvaW5kZXguanM/NzQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCJjOlxcXFxQcm9qZWN0c1xcXFxTb3VyY2VUcmVlXFxcXGthZGVuYS1rMTAtY29yZVxcXFxmcm9udGVuZFxcXFxub2RlX21vZHVsZXNcXFxccmVhY3QtaG90LWFwaVxcXFxtb2R1bGVzXFxcXGluZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCJjOlxcXFxQcm9qZWN0c1xcXFxTb3VyY2VUcmVlXFxcXGthZGVuYS1rMTAtY29yZVxcXFxmcm9udGVuZFxcXFxub2RlX21vZHVsZXNcXFxccmVhY3QtaG90LWxvYWRlclxcXFxSb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC1kb20vbGliL1JlYWN0TW91bnRcIiksIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpOyBtb2R1bGUubWFrZUhvdCA9IG1vZHVsZS5ob3QuZGF0YSA/IG1vZHVsZS5ob3QuZGF0YS5tYWtlSG90IDogUmVhY3RIb3RBUEkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUm9vdEluc3RhbmNlUHJvdmlkZXIuZ2V0Um9vdEluc3RhbmNlcyhSZWFjdE1vdW50KTsgfSwgUmVhY3QpOyB9KSgpOyB9IHRyeSB7IChmdW5jdGlvbiAoKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBhc3N3b3JkID0gZnVuY3Rpb24gUGFzc3dvcmQoY29udGFpbmVyKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXNzd29yZCk7XG5cbiAgdmFyIGNsYXNzSW5wdXQgPSAnanMtcGFzc3dvcmQtaW5wdXQnO1xuICB2YXIgY2xhc3NUb2dnbGVyID0gJ2pzLXBhc3N3b3JkLXRvZ2dsZXInO1xuXG4gIHZhciBpbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIGNsYXNzSW5wdXQpO1xuICB2YXIgdG9nZ2xlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIGNsYXNzVG9nZ2xlcik7XG5cbiAgdmFyIF90b2dnbGVyJGRhdGFzZXQgPSB0b2dnbGVyLmRhdGFzZXQsXG4gICAgICBwYXNzd29yZFNob3cgPSBfdG9nZ2xlciRkYXRhc2V0LnBhc3N3b3JkU2hvdyxcbiAgICAgIHBhc3N3b3JkSGlkZSA9IF90b2dnbGVyJGRhdGFzZXQucGFzc3dvcmRIaWRlO1xuXG5cbiAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICd0ZXh0Jykge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gICAgICB0b2dnbGVyLmlubmVySFRNTCA9IHBhc3N3b3JkU2hvdztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgIHRvZ2dsZXIuaW5uZXJIVE1MID0gcGFzc3dvcmRIaWRlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQYXNzd29yZDtcblxuLyogUkVBQ1QgSE9UIExPQURFUiAqLyB9KS5jYWxsKHRoaXMpOyB9IGZpbmFsbHkgeyBpZiAobW9kdWxlLmhvdCkgeyAoZnVuY3Rpb24gKCkgeyB2YXIgZm91bmRSZWFjdENsYXNzZXMgPSBtb2R1bGUuaG90LmRhdGEgJiYgbW9kdWxlLmhvdC5kYXRhLmZvdW5kUmVhY3RDbGFzc2VzIHx8IGZhbHNlOyBpZiAobW9kdWxlLmV4cG9ydHMgJiYgbW9kdWxlLm1ha2VIb3QpIHsgdmFyIG1ha2VFeHBvcnRzSG90ID0gcmVxdWlyZShcImM6XFxcXFByb2plY3RzXFxcXFNvdXJjZVRyZWVcXFxca2FkZW5hLWsxMC1jb3JlXFxcXGZyb250ZW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxyZWFjdC1ob3QtbG9hZGVyXFxcXG1ha2VFeHBvcnRzSG90LmpzXCIpOyBpZiAobWFrZUV4cG9ydHNIb3QobW9kdWxlLCByZXF1aXJlKFwicmVhY3RcIikpKSB7IGZvdW5kUmVhY3RDbGFzc2VzID0gdHJ1ZTsgfSB2YXIgc2hvdWxkQWNjZXB0TW9kdWxlID0gdHJ1ZSAmJiBmb3VuZFJlYWN0Q2xhc3NlczsgaWYgKHNob3VsZEFjY2VwdE1vZHVsZSkgeyBtb2R1bGUuaG90LmFjY2VwdChmdW5jdGlvbiAoZXJyKSB7IGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihcIkNhbm5vdCBhcHBseSBob3QgdXBkYXRlIHRvIFwiICsgXCJpbmRleC5qc1wiICsgXCI6IFwiICsgZXJyLm1lc3NhZ2UpOyB9IH0pOyB9IH0gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7IGRhdGEubWFrZUhvdCA9IG1vZHVsZS5tYWtlSG90OyBkYXRhLmZvdW5kUmVhY3RDbGFzc2VzID0gZm91bmRSZWFjdENsYXNzZXM7IH0pOyB9KSgpOyB9IH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc3RhdGljL3Bhc3N3b3JkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")}});