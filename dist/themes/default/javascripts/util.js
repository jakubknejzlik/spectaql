"use strict";

function debounce(callback, waitMS) {
  var timeoutId = null;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      callback.apply(null);
    }, waitMS);
  };
}