webpackJsonp([5],{333:function(i,t,o){"use strict";function n(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function i(i,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(t,o,n){return o&&i(t.prototype,o),n&&i(t,n),t}}(),a=function(){function i(t){n(this,i),this.container=t,this.timeForAnimation=+t.dataset.timeForAnimation,this.timeToRemove=+t.dataset.timeToRemove;this.notification={};for(var o=1;o<=3;o+=1)this.notification[o]=void 0}return e(i,[{key:"addNotification",value:function(i){function t(){var t=n.container.querySelector('[data-notification-type="'+i+'"]'),e=t.cloneNode(!0);return e.querySelector(".js-notification-closer").addEventListener("click",function(i){var t=i.currentTarget.parentNode;t.classList.add("hide"),o(t),setTimeout(function(){t.remove()},n.timeForAnimation)}),e}function o(i){var t=Object.keys(n.notification),o=Object.values(n.notification),e=o.indexOf(i),a=t[e];n.notification[a]=void 0,Object.keys(n.notification).forEach(function(i){if(i>a&&n.notification[i]){var t=n.notification[i],o=i-1;t.classList.remove("show-"+i),t.classList.add("show-"+o),n.notification[o]=t,n.notification[i]=void 0}})}var n=this;!function(){var i=Object.keys(n.notification).length,t=n.notification[i];t&&(t.classList.add("hide"),n.notification[i]=void 0,setTimeout(function(){t.remove()},n.timeForAnimation))}(),function(){for(var i=Object.keys(n.notification).length,t=i;t>0;t-=1)if(t!==i){var o=n.notification[t];if(o){o.classList.remove("show-"+t);var e=t+1;o.classList.add("show-"+e),n.notification[e]=o}}}(),function(){var i=t();n.notification[1]=i,n.container.appendChild(i),window.getComputedStyle(i).opacity,i.classList.add("show-1"),setTimeout(function(){i.classList.add("hide")},n.timeToRemove),setTimeout(function(){i.remove()},n.timeForAnimation+n.timeToRemove)}()}}]),i}();t.default=a}});