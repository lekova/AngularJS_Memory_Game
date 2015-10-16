'use strict';

angular.module('gameApp').factory('Boards', function() {

	var tiles_3x4 = [
		{ id: 1, url: 'images/3x3/angularjs.png'},
		{ id: 2, url: 'images/3x3/angularjs.png'},
		{ id: 3, url: 'images/3x3/emberjs.png'},
		{ id: 4, url: 'images/3x3/emberjs.png'},
		{ id: 5, url: 'images/3x3/nodejs.png'},
		{ id: 6, url: 'images/3x3/nodejs.png'},
		{ id: 7, url: 'images/3x3/polymer.png'},
		{ id: 8, url: 'images/3x3/polymer.png'},
		{ id: 9, url: 'images/3x3/react.png'},
		{ id: 10, url: 'images/3x3/react.png'},
		{ id: 11, url: 'images/3x3/requirejs.png'},
		{ id: 12, url: 'images/3x3/requirejs.png'}
	];

	var tiles_4x4 = [
		{ id: 1, url: 'images/3x3/angularjs.png'},
		{ id: 2, url: 'images/3x3/angularjs.png'},
		{ id: 3, url: 'images/3x3/emberjs.png'},
		{ id: 4, url: 'images/3x3/emberjs.png'},
		{ id: 5, url: 'images/3x3/nodejs.png'},
		{ id: 6, url: 'images/3x3/nodejs.png'},
		{ id: 7, url: 'images/3x3/polymer.png'},
		{ id: 8, url: 'images/3x3/polymer.png'},
		{ id: 9, url: 'images/3x3/react.png'},
		{ id: 10, url: 'images/3x3/react.png'},
		{ id: 11, url: 'images/3x3/requirejs.png'},
		{ id: 12, url: 'images/3x3/requirejs.png'},
		{ id: 13, url: 'images/3x3/beerjs.png'},
		{ id: 14, url: 'images/3x3/beerjs.png'},
		{ id: 15, url: 'images/3x3/JS.png'},
		{ id: 16, url: 'images/3x3/JS.png'}
	];

	var tiles_4x5 = [
		{ id: 1, url: 'images/3x3/angularjs.png'},
		{ id: 2, url: 'images/3x3/angularjs.png'},
		{ id: 3, url: 'images/3x3/emberjs.png'},
		{ id: 4, url: 'images/3x3/emberjs.png'},
		{ id: 5, url: 'images/3x3/nodejs.png'},
		{ id: 6, url: 'images/3x3/nodejs.png'},
		{ id: 7, url: 'images/3x3/polymer.png'},
		{ id: 8, url: 'images/3x3/polymer.png'},
		{ id: 9, url: 'images/3x3/react.png'},
		{ id: 10, url: 'images/3x3/react.png'},
		{ id: 11, url: 'images/3x3/requirejs.png'},
		{ id: 12, url: 'images/3x3/requirejs.png'},
		{ id: 13, url: 'images/3x3/beerjs.png'},
		{ id: 14, url: 'images/3x3/beerjs.png'},
		{ id: 15, url: 'images/3x3/JS.png'},
		{ id: 16, url: 'images/3x3/JS.png'},
		{ id: 17, url: 'images/3x3/v8.png'},
		{ id: 18, url: 'images/3x3/v8.png'},
		{ id: 19, url: 'images/4x4/jasmine.png'},
		{ id: 20, url: 'images/4x4/jasmine.png'}
	];

	var tiles_5x6 = [
		{ id: 1, url: 'images/3x3/angularjs.png'},
		{ id: 2, url: 'images/3x3/angularjs.png'},
		{ id: 3, url: 'images/3x3/emberjs.png'},
		{ id: 4, url: 'images/3x3/emberjs.png'},
		{ id: 5, url: 'images/3x3/nodejs.png'},
		{ id: 6, url: 'images/3x3/nodejs.png'},
		{ id: 7, url: 'images/3x3/polymer.png'},
		{ id: 8, url: 'images/3x3/polymer.png'},
		{ id: 9, url: 'images/3x3/react.png'},
		{ id: 10, url: 'images/3x3/react.png'},
		{ id: 11, url: 'images/3x3/requirejs.png'},
		{ id: 12, url: 'images/3x3/requirejs.png'},
		{ id: 13, url: 'images/3x3/beerjs.png'},
		{ id: 14, url: 'images/3x3/beerjs.png'},
		{ id: 15, url: 'images/3x3/JS.png'},
		{ id: 16, url: 'images/3x3/JS.png'},
		{ id: 17, url: 'images/3x3/v8.png'},
		{ id: 18, url: 'images/3x3/v8.png'},
		{ id: 19, url: 'images/4x4/jasmine.png'},
		{ id: 20, url: 'images/4x4/jasmine.png'},
		{ id: 21, url: 'images/4x4/coffeescript.png'},
		{ id: 22, url: 'images/4x4/coffeescript.png'},
		{ id: 23, url: 'images/4x4/html5.png'},
		{ id: 24, url: 'images/4x4/html5.png'},
		{ id: 25, url: 'images/4x4/css3.png'},
		{ id: 26, url: 'images/4x4/css3.png'},
		{ id: 27, url: 'images/4x4/posql.png'},
		{ id: 28, url: 'images/4x4/posql.png'},
		{ id: 29, url: 'images/4x4/mongo.png'},
		{ id: 30, url: 'images/4x4/mongo.png'}
	];

	var tiles_6x6 = [
		{ id: 1, url: 'images/3x3/angularjs.png'},
		{ id: 2, url: 'images/3x3/angularjs.png'},
		{ id: 3, url: 'images/3x3/emberjs.png'},
		{ id: 4, url: 'images/3x3/emberjs.png'},
		{ id: 5, url: 'images/3x3/nodejs.png'},
		{ id: 6, url: 'images/3x3/nodejs.png'},
		{ id: 7, url: 'images/3x3/polymer.png'},
		{ id: 8, url: 'images/3x3/polymer.png'},
		{ id: 9, url: 'images/3x3/react.png'},
		{ id: 10, url: 'images/3x3/react.png'},
		{ id: 11, url: 'images/3x3/requirejs.png'},
		{ id: 12, url: 'images/3x3/requirejs.png'},
		{ id: 13, url: 'images/3x3/beerjs.png'},
		{ id: 14, url: 'images/3x3/beerjs.png'},
		{ id: 15, url: 'images/3x3/JS.png'},
		{ id: 16, url: 'images/3x3/JS.png'},
		{ id: 17, url: 'images/3x3/v8.png'},
		{ id: 18, url: 'images/3x3/v8.png'},
		{ id: 19, url: 'images/4x4/jasmine.png'},
		{ id: 20, url: 'images/4x4/jasmine.png'},
		{ id: 21, url: 'images/4x4/coffeescript.png'},
		{ id: 22, url: 'images/4x4/coffeescript.png'},
		{ id: 23, url: 'images/4x4/html5.png'},
		{ id: 24, url: 'images/4x4/html5.png'},
		{ id: 25, url: 'images/4x4/css3.png'},
		{ id: 26, url: 'images/4x4/css3.png'},
		{ id: 27, url: 'images/4x4/posql.png'},
		{ id: 28, url: 'images/4x4/posql.png'},
		{ id: 29, url: 'images/4x4/mongo.png'},
		{ id: 30, url: 'images/4x4/mongo.png'},
		{ id: 31, url: 'images/4x4/handlebars-js.png'},
		{ id: 32, url: 'images/4x4/handlebars-js.png'},
		{ id: 33, url: 'images/4x4/bower.png'},
		{ id: 34, url: 'images/4x4/bower.png'},
		{ id: 35, url: 'images/4x4/yeoman.png'},
		{ id: 36, url: 'images/4x4/yeoman.png'}
	];

	return {
		tiles_3x4: tiles_3x4,
		tiles_4x4: tiles_4x4,
		tiles_4x5: tiles_4x5,
		tiles_5x6: tiles_5x6,
		tiles_6x6: tiles_6x6
	};
});
