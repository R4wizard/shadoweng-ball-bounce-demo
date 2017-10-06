import './less/style.less';

import {Engine, Renderers} from "shadowengine";

import BallBounceDemo from "./javascript/BallBounceDemo.js";

new Engine(BallBounceDemo, Renderers.Canvas2D);
