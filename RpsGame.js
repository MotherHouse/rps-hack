'use strict';

class RpsGame {

	constructor(players) {
		this._players = players;

		players.forEach((it) => {
			it.on('turn', (turn) => {
				console.log(turn);
				players.forEach((player) => player.emit('turn', turn));
			});
		});

		players.forEach((p) => p.emit('message', 'Starting Game'));
	}

}

exports = module.exports = RpsGame;