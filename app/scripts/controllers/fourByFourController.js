'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:FourByFourCtrl
 * @description
 * # FourByFourCtrl is responsible for the page with 16 tiles
 * Controller of the gameApp
 */
(function() {

	angular.module('gameApp').controller('FourByFourCtrl', FourByFourCtrl);
	FourByFourCtrl.$inject = ['$scope'];

	function FourByFourCtrl($scope) {

		var vm = this;

		vm.tiles_4x4 = [
			{ id: 1, url: 'images/3x3/angularjs.png'},
			{ id: 2, url: 'images/3x3/angularjs.png'},
			{ id: 3, url: 'images/3x3/ember.png'},
			{ id: 4, url: 'images/3x3/ember.png'},
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

		vm.flip3D = function(id) {
			var clickedFront = angular.element(document.querySelector('#front_' + id));
			var clickedBack = angular.element(document.querySelector('#back_' + id));
			clickedFront.addClass('front-image-clicked');
			clickedBack.addClass('back-image-clicked');
		}
	};
})();
