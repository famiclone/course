import { Vector2D } from './Vector';

type ShapeProps = {
  size: Vector2D;
  pos: Vector2D;
  color: string;
};

type SpriteProps = {
  size: Vector2D;
  pos: Vector2D;
  image: HTMLCanvasElement;
};

export interface RendererProps {
  drawShape: (shape: ShapeProps) => void;
  drawSprite: (sprite: SpriteProps) => void;
  drawText: (text: unknown) => void;
}

export default class Renderer implements RendererProps {
  private canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.background = 'black';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    window.onresize = () => {
      this.setSize(window.innerWidth, window.innerHeight);
    };

    this.mount();
  }

  private mount() {
    document.body.append(this.canvas);
  }

  private clear() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public setSize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  drawText() {}

  drawShape(shape: ShapeProps) {
    if (this.ctx) {
      this.clear();
      this.ctx.fillStyle = shape.color;
      this.ctx.fillRect(shape.pos.x, shape.pos.y, shape.size.x, shape.size.y);
    }
  }

  drawSprite(sprite: SpriteProps) {
    if (this.ctx) {
      this.clear();
      // this.ctx.fillRect(shape.pos.x, shape.pos.y, shape.size.x, shape.size.y);
    }
  }
}
