'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:FiveBySixCtrl
 * @description
 * # FiveBySixCtrl is responsible for the page with 30 tiles
 * Controller of the gameApp
 */
angular.module('gameApp').controller('FiveBySixCtrl', function() {

	var vm = this;
	//var Helpers = require('./util.js');
	vm.tiles_5x6 = Helpers.Funcs.memory_tile_shuffle(Helpers.Boards.tiles_5x6);
	vm.tilesCount = vm.tiles_5x6.length;
	vm.totalClicks = 0;
	vm.tiles_flipped = 0;
	vm.flipped = false;
	vm.matched_values = [];
	vm.matched_tiles_ids = [];

	vm.newBoard = function() {
		vm.matched_values = [];
		vm.matched_tiles_ids = [];
		vm.totalClicks = 0;

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
		vm.closeTiles();
		Helpers.Funcs.memory_tile_shuffle(vm.tiles_5x6);
	};

	vm.isFlipped = function(index) {
		vm.flipped = index;
	};

	vm.flipTile = function(obj, id) {

		if (vm.matched_values.length < 2) {
			vm.totalClicks++;
			var value = Helpers.Funcs.findElementById(obj, id);

			var clickedFront = angular.element(document.querySelector('#front_' + id));
			var clickedBack = angular.element(document.querySelector('#back_' + id));
			clickedFront.addClass('front-image-clicked');
			clickedBack.addClass('back-image-clicked');

			if (vm.matched_values.length === 0) {
				vm.matched_values.push(value);
				vm.matched_tiles_ids.push(id);
			}
			else if (vm.matched_values.length === 1) {
				vm.matched_values.push(value);
				vm.matched_tiles_ids.push(id);

				if (vm.matched_values[0].url === vm.matched_values[1].url) {
					vm.tiles_flipped += 2;

					vm.matched_values = [];
					vm.matched_tiles_ids = [];

					if (vm.tiles_flipped === vm.tilesCount) {
						// TODO: Show modal with win game
						// reset the board
					}
				} else {
					var prevFront = angular.element(document.querySelector('#front_' + vm.matched_values[0].id));
					var prevBack = angular.element(document.querySelector('#back_' + vm.matched_values[0].id));

					setTimeout(function() {
						prevFront.removeClass('front-image-clicked');
						prevBack.removeClass('back-image-clicked');
						clickedFront.removeClass('front-image-clicked');
						clickedBack.removeClass('back-image-clicked');
					}, 700);

					vm.matched_values = [];
					vm.matched_tiles_ids = [];
				}
			}
		}
	};
});
