webpackJsonp([54],{370:function(module,exports,__webpack_require__){try{(function(){"use strict";function separate(str,symbol){if(str.length<4)return str;var array=Array.from(str),formattedArray=[];return array.reverse().forEach(function(item,index){index%3||!index||formattedArray.push(symbol),formattedArray.push(item)}),formattedArray.reverse().join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=separate}).call(this)}finally{}}});