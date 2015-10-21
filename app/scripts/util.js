'use strict';
var Helpers = Helpers || {};
// create a namespace so we don't conflict with other global variables
//var HelperFuncs = HelperFuncs || {};

// Create an Object in the GameApp named Util that will provide
// a set of common utility functions for your app.
Helpers.Funcs = (function() {

  function _findElementById(array, id) {
      var obj = {};
      for (var i = 0; i < array.length; i++) {
          if (array[i].id === Number(id)) {
              obj = array[i];
              break;
          }
      }
      return obj;
  }

  function _memory_tile_shuffle(array) {
    var i = array.length, j, temp;

    while(--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  }

  return {
    findElementById: _findElementById,
    memory_tile_shuffle: _memory_tile_shuffle
  };
})();
