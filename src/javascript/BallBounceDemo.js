import {Game, Logger} from "shadowengine";

import BallBounceDemoScene from "./Scenes/BallBounceDemoScene";

export default class BallBounceDemo extends Game {

  GAME_NAME    = "Ball Bouncing Demo";
  GAME_VERSION = "0.1.5821";

  constructor(engine) {
    super(engine);
    Logger.info("BallBounceDemo", "hello from my game :)");

    this.getSceneHandler().switchScene(BallBounceDemoScene);
  }

}
