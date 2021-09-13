import { ExtendedWindow, ObjectType } from '../types.js';
import { AssetLoader } from './AssetLoader.js';
import Renderer from './Renderer.js';

export interface GameProps {
  init: (cb: (time: number) => void) => void;
}

export default class Game implements GameProps {
  renderer: Renderer;
  scene: unknown;
  assets: unknown;
  protected dt: (t: number) => number;

  constructor(config: ObjectType) {
    this.renderer = new Renderer();
    this.scene = null;
    this.dt = this.getDT();

    if (config?.debug) {
      this.enableDebugMode();
    }
  }

  private enableDebugMode() {
    (window as ExtendedWindow).game = this;
  }

  private setup(assets: unknown, cb: (time: number) => void) {
    // @ts-ignore
    cb();
  }

  getDT(): (t: number) => number {
    let lastTime = 0;

    return function (time: number = 0) {
      const dt = time - lastTime;
      lastTime = time;
      return dt;
    };
  }

  getDeltaTime(time: number) {
    return this.dt(time);
  }

  static findTexture(name: string): HTMLCanvasElement {
    const canvas = document.createElement('canvas');

    return canvas;
  }

  init(cb: (time: number) => void) {
    AssetLoader.load(['images/tileset.png'])
      // @ts-ignore
      .then((assets: AssetLoader) => this.setup(assets.list, cb));
  }
}
