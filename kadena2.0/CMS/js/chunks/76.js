webpackJsonp([76],{358:function(module,exports,__webpack_require__){try{(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.paginationFilter=function(list,currentPage,filterNumber){var minPage=filterNumber*currentPage,maxPage=filterNumber*(currentPage+1)-1;return list.filter(function(page,index){return index>=minPage&&index<=maxPage})},exports.bla=1}).call(this)}finally{}}});