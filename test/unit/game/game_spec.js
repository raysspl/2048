describe('Game module', function() {
	describe('GameManager', function() {
		// Inject the Game module into this test
		beforeEach(module('Game'));

		// Our tests will go below here
		var gameManager; // instance of the GameManager
		beforeEach(Inject(function(GameManager) {
			gameManager = GameManager;
		});
	});
});