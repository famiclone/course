import Game from './engine/Game.js';
import Sprite from './engine/Sprite.js';
import { Vector2D } from './engine/Vector.js';

const game = new Game({ debug: true });
const sprite = new Sprite();

const player = {
  pos: new Vector2D(0, 0),
  size: new Vector2D(16, 16),
  color: 'tomato',
};

function update(time: number = 0) {
  const dt = game.getDeltaTime(time);

  player.pos.set((player.pos.x += 0.1), 10);
  game.renderer.drawShape(player);
  requestAnimationFrame(update);
}

game.init(update);
