angular.module('Game', [])
.service('GameManager', function() {
	// Create a new game
	this.newGame = function() {};
	// Handle the move action
	this.movesAvailable = function() {
		return GridService.anyCellsAvailable() ||
			GridService.tileMatchesAvailable();
	};
	// Update the score
	this.updateScore = function(newScore) {};
	// Are there moves left?
	this.movesAvailable = function() {};
});

