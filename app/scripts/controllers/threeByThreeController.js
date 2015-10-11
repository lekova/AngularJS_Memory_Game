'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:ThreeByThreeCtrl
 * @description
 * # ThreeByThreeCtrl is responsible for the page with 12 tiles
 * Controller of the gameApp
 */
(function() {

	angular.module('gameApp').controller('ThreeByThreeCtrl', ThreeByThreeCtrl);
	ThreeByThreeCtrl.$inject = ['$scope'];

	function ThreeByThreeCtrl($scope) {

		var vm = this;

		vm.tiles_3x4 = [
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
			{ id: 12, url: 'images/3x3/requirejs.png'}
		];

		vm.flip3D = function(id) {
			var clickedFront = angular.element(document.querySelector('#front_' + id));
			var clickedBack = angular.element(document.querySelector('#back_' + id));
			clickedFront.addClass('front-image-clicked');
			clickedBack.addClass('back-image-clicked');
		}
	};
})();
