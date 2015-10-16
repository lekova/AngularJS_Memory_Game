'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:FourByFourCtrl
 * @description
 * # FourByFourCtrl is responsible for the page with 16 tiles
 * Controller of the gameApp
 */
angular.module('gameApp').controller('FourByFourCtrl', function(Boards, GameFactory) {
	var vm = this;

	vm.tiles_4x4 = Boards.tiles_4x4;

	vm.memory_tile_shuffle = function() {
		console.log('memory shuffle clicked');
		GameFactory.memory_tile_shuffle(vm.tiles_4x4);
	};

	vm.flip3D = function(id) {
		var clickedFront = angular.element(document.querySelector('#front_' + id));
		var clickedBack = angular.element(document.querySelector('#back_' + id));
		clickedFront.addClass('front-image-clicked');
		clickedBack.addClass('back-image-clicked');
	};
});
