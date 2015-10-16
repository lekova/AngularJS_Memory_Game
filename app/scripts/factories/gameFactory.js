'use strict';

angular.module('gameApp').factory('GameFactory', function() {

	// var matched_values = [];
	// var memory_tiles_ids = [];
	// var tiles_flipped = 0;

	function findElementById(array, id) {
		console.log('find element by id array: ', array);
	    var obj = {};
	    for (var i = 0; i < array.length; i++) {
	        if (array[i].id === Number(id)) {
	            obj = array[i];
	            break;
	        }
	    }
			console.log('obj is: ', obj);
	    return obj;
	}

	function memory_tile_shuffle(array) {
		var i = array.length, j, temp;

		while(--i > 0) {
			j = Math.floor(Math.random() * (i + 1));
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
		}
		return array;
	}

	// function newBoard(board) {
	// 	tiles_flipped = 0;
	// 	var output = '';
	// 	board.memory_tile_shuffle();
	// 	for (var i =0; i < board.length; i++) {
	// 		output += '<div id ="tile_' + i + '" onclick="memoryFlipTile(this, \'' + board[i] + '\')"></div>';
	// 	}
	//
	// 	document.getElementById('memory_board').innerHTML = output;
	// }

	// function memoryFlipTile(board, tile, val) {
	// 	if (tile.innerHTML === '' && matched_values.length < 2) {
	// 		tile.style.background = '#FFF';
	// 		tile.innerHTML = val;
	//
	// 		if (matched_values.length === 0) {
	// 			matched_values.push(val);
	// 			memory_tiles_ids.push(tile.id);
	// 		} else if (matched_values.length === 1) {
	// 			matched_values.push(val);
	// 			memory_tiles_ids.push(tile.id);
	//
	// 			if (matched_values[0] === matched_values[1]) {
	// 				tiles_flipped += 2;
	//
	// 				// clear both arrays
	// 				matched_values = [];
	// 				memory_tiles_ids = [];
	//
	// 				// check to see if the whole board is cleared
	// 				if (tiles_flipped === board.length) {
	// 					// TODO: alert('board cleared... generating new board');
	// 					document.getElementById('memory_board').innerHTML = '';
	// 					newBoard();
	// 				}
	// 			} else {
	// 				function flip2Back() {
	// 					// flip the 2 tiles back over
	// 					var tile1 = document.getElementById(memory_tiles_ids[0]);
	// 					var tile2 = document.getElementById(memory_tiles_ids[1]);
	// 					tile1.style.background = 'url(tile_bg.jpg) no-repeat;';
	// 					tile1.innerHTML = '';
	// 					tile2.style.background = 'url(tile_bg.jpg) no-repeat;';
	// 					tile2.innerHTML = '';
	//
	// 					//clear both arrays
	// 					matched_values = [];
	// 					memory_tiles_ids = [];
	// 				}
	// 				setTimeout(flip2Back, 700);
	// 			}
	// 		}
	// 	}
	// }

	return {
		//newBoard: newBoard,
		findElementById: findElementById,
		memory_tile_shuffle: memory_tile_shuffle
		// memoryFlipTile: memoryFlipTile
	};
});
