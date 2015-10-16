'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:ThreeByFourCtrl
 * @description
 * # ThreeByFourCtrl is responsible for the page with 12 tiles
 * Controller of the gameApp
 */
angular.module('gameApp').controller('ThreeByFourCtrl', function(Boards, GameFactory) {
	var vm = this;
	// vm.board = [];
	vm.tiles_3x4 = Boards.tiles_3x4;
	vm.tilesCount = vm.tiles_3x4.length;
	vm.totalClicks = 0;
	vm.tiles_flipped = 0;
	vm.flipped = false;
	vm.matched_values = [];
	vm.matched_tiles_ids = [];

	vm.newBoard = function() {
		// set tiles fliped to 0.
		vm.matched_values = [];
		console.log('newBoard matched_values array: ', vm.matched_values);
		vm.matched_tiles_ids = [];
		console.log('newBoard matched_tiles_ids array:', vm.matched_tiles_ids);
		vm.totalClicks = 0;
		vm.tiles_flipped = 0;

		// shuffle the array
		vm.memory_tile_shuffle();
		vm.closeTiles();
	};

	vm.closeTiles = function() {
		var backs = document.getElementsByClassName('back-image');
		var fronts = document.getElementsByClassName('front-image');

		for (var i = 0; i < vm.tilesCount; i++) {
			angular.element(backs[i]).removeClass('back-image-clicked');
			angular.element(fronts[i]).removeClass('front-image-clicked');
		}
	};

	vm.memory_tile_shuffle = function() {
		console.log('shuffle clicked');
		vm.closeTiles();
		GameFactory.memory_tile_shuffle(Boards.tiles_3x4);
		console.log('new array after shuffle: ', vm.tiles_3x4);
	};

	vm.isFlipped = function(index) {
		vm.flipped = index;
	};

	vm.flipTile = function(obj, id) {
		console.log('id: ', id);
		console.log('flipTile vm.matched_values', vm.matched_values);

		// TODO: check if tile is already flipped
		if (vm.matched_values.length < 2) {
			vm.totalClicks++;
			var value = GameFactory.findElementById(vm.tiles_3x4, id);
			console.log('value of current clicked element:', value);

			var clickedFront = angular.element(document.querySelector('#front_' + id));
			var clickedBack = angular.element(document.querySelector('#back_' + id));
			console.log('clickedBack: ', clickedBack);
			clickedFront.addClass('front-image-clicked');
			clickedBack.addClass('back-image-clicked');

			if (vm.matched_values.length === 0) {
				vm.matched_values.push(value);
				vm.matched_tiles_ids.push(id);
			}
			else if (vm.matched_values.length === 1) {
				vm.matched_values.push(value);
				vm.matched_tiles_ids.push(id);
				console.log('vm.matched_values[0].url', vm.matched_values[0].url);
				console.log('vm.matched_values[1].url', vm.matched_values[1].url);

				if (vm.matched_values[0].url === vm.matched_values[1].url) {

					vm.tiles_flipped += 2;

					// clear temp arrays
					vm.matched_values = [];
					vm.matched_tiles_ids = [];

					if (vm.tiles_flipped === vm.tilesCount) {
						// TODO: Show modal with win game
						// reset the board
						vm.newBoard();
					}
				} else {
					var prevFront = angular.element(document.querySelector('#front_' + vm.matched_values[0].id));
					var prevBack = angular.element(document.querySelector('#back_' + vm.matched_values[0].id));

					setTimeout(function() {
						prevFront.removeClass('front-image-clicked');
						prevBack.removeClass('back-image-clicked');
						clickedFront.removeClass('front-image-clicked');
						clickedBack.removeClass('back-image-clicked');
					}, 1000);

					vm.matched_values = [];
					vm.matched_tiles_ids = [];
				}
			}
		}
	};

	// vm.flipBack = function(front, back) {
	//
	// };
});
