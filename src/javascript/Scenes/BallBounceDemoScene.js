import {Scene, Input} from "shadowrts"
import BouncingBall from "../Entities/BouncingBall";

export default class BallBounceDemoScene extends Scene {

  update(delta) {
    super.update(delta);

    if(Input.Mouse.IsDown && (Input.Mouse.IsMoving || Input.Mouse.WasUp)) {
      let entity = new BouncingBall(this);
      entity.X = Input.Mouse.X;
      entity.Y = Input.Mouse.Y;
      this.entities.push(entity);
    }
  }

}
