angular.module('Grid', [])
.factory('TileModel', function() {
	// ...
})
.service('GridService', function(TileModel) {
	this.tiles = [];
	this.tiles.push(new TileModel({x: 1, y: 1}, 2));
	this.tiles.push(new TileModel({x: 1, y: 2}, 2));
	// ...
});

