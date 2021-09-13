import Game from './engine/Game';

export type ObjectType = { [key: string]: any };

export interface ExtendedWindow extends Window {
  game?: Game;
}
