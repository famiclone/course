export default class SpriteSheet {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;

  constructor(private image: ImageBitmap, private sheet: unknown) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  get() {
    return this.canvas;
  }

  find(name: string): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(this.canvas, 0, 0);
    return canvas;
  }
}
