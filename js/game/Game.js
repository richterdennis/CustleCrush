import { EVENTS } from '../EventManager';
import BootState from './states/Boot'
import StageState from './states/Stage'

export default class Game extends Phaser.Game {
	constructor(parentElement) {
		super(1920, 1080, Phaser.AUTO, parentElement);

		CastleCrush.EventManager.addEventListener(EVENTS.GAME_ACTION, (event) => {
			console.log(event);
		});

		this.startGame();
	}

	startGame() {

		// Add states
		this.state.add('Boot', BootState, false);
		this.state.add('Stage', StageState, false)

		// Start boot state
		this.state.start('Boot');
	}
}
