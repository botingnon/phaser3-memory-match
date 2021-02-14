import Phaser from 'phaser'

import Preloader from './scenes/Preloader'
import Game from './scenes/Game'
import CountdownController from './scenes/CountdownController'

import * as SceneKeys from './const/SceneKeys'

const config = {
	type: Phaser.AUTO,
	width: 700,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true
		}
	},
}

const game = new Phaser.Game(config)

game.scene.add(SceneKeys.Preloader, Preloader)
game.scene.add(SceneKeys.Game, Game)
game.scene.add(SceneKeys.CountdownController, CountdownController)

game.scene.start(SceneKeys.Preloader)

export default game
