webpackJsonp([2],{347:function(e,t,a){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t){var a=this;s(this,e),this.clicker=t,this.activeClass="active",this.html=document.querySelector("html");var o=t.dataset.dialog;this.dialog=document.querySelector(o),this.closerNodes=this.dialog.querySelectorAll(".dialog__closer"),this.clicker.addEventListener("click",function(){!a.dialog.classList.contains(a.activeClass)&&a.dialog.classList.add(a.activeClass),a.html.classList.add("css-overflow-hidden")}),Array.from(this.closerNodes).forEach(function(e){e.addEventListener("click",function(){a.dialog.classList.contains(a.activeClass)&&a.dialog.classList.remove(a.activeClass),a.html.classList.remove("css-overflow-hidden")})})};t.default=o},357:function(e,t,a){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t){s(this,e);var a=t.dataset,o=a.storageActive,i=a.storageKey,c=a.storageValue,l=a.storageChange;"true"===o&&localStorage.setItem(i,c),"true"===l&&t.addEventListener("click",function(){localStorage.getItem(i)===c?localStorage.removeItem(i):localStorage.setItem(i,c)})};t.default=o}});