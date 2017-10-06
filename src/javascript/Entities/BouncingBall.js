import {Entity} from "shadowrts";

export default class BouncingBall extends Entity {

  constructor(scene) {
    super(scene);
    this._color = "rgba(" + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0);
    this._dirX  = Math.random() >= 0.5 ? 1 : -1;
    this._dirY  = Math.random() >= 0.5 ? 1 : -1;
    this._speed = (Math.random() * 3) + 0.5;
    this._size  = (Math.random() * 25) + 10;
  }

  draw(ctx, screenX, screenY) {
    const x = this.X - screenX;
    const y = this.Y - screenY;

    const width  = this._scene.getGame().getEngine().getRenderer().getWidth();
    const height = this._scene.getGame().getEngine().getRenderer().getHeight();
    let a = (this.X - (width / 2));
    let b = (this.Y - (height / 2));
    let distance = Math.sqrt((a * a) + (b * b));

    let alpha = 0.8 - (distance / Math.max(width, height));
    this._speed = alpha;
    ctx.strokeStyle = this._color + ", " + alpha + ")";
    ctx.fillStyle   = this._color + ", " + alpha + ")";
    ctx.beginPath();
    ctx.arc(x | 0, y | 0, this._size, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
  }

  update(delta) {
    const width  = this._scene.getGame().getEngine().getRenderer().getWidth();
    const height = this._scene.getGame().getEngine().getRenderer().getHeight();

    this.X += (0.1 * this._speed * delta) * this._dirX;
    this.Y += (0.1 * this._speed * delta) * this._dirY;

    let hit = false;
    if(this.X < this._size)        {hit=true;this._dirX =  1;this.X=this._size;}
    if(this.X > width-this._size)  {hit=true;this._dirX = -1;this.X=width-this._size;}
    if(this.Y < this._size)        {hit=true;this._dirY =  1;this.Y=this._size;}
    if(this.Y > height-this._size) {hit=true;this._dirY = -1;this.Y=height-this._size;}

    if(hit == true) {
      this._color = "rgba(" + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0);
    }
  }

}
