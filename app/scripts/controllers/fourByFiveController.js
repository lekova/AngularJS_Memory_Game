'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:FourByFiveCtrl
 * @description
 * # FourByFiveCtrl is responsible for the page with 20 tiles
 * Controller of the gameApp
 */
angular.module('gameApp').controller('FourByFiveCtrl', function(Boards, GameFactory) {

	var vm = this;

	vm.tiles_4x5 = Boards.tiles_4x5;

	vm.memory_tile_shuffle = function() {
		console.log('memory shuffle clicked');
		GameFactory.memory_tile_shuffle(vm.tiles_4x5);
	};

	vm.flip3D = function(id) {
		var clickedFront = angular.element(document.querySelector('#front_' + id));
		var clickedBack = angular.element(document.querySelector('#back_' + id));
		clickedFront.addClass('front-image-clicked');
		clickedBack.addClass('back-image-clicked');
	};
});
