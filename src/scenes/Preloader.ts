import Phaser from "phaser";

import { Game } from "../const/SceneKeys";

export default class Preloader extends Phaser.Scene {
  preload() {
    this.load.spritesheet("sokoban", "textures/sokoban_tilesheet.png", {
      frameWidth: 64,
    });

    this.load.image("bear", "textures/bear.png");
    this.load.image("chicken", "textures/chicken.png");
    this.load.image("duck", "textures/duck.png");
    this.load.image("parrot", "textures/parrot.png");
    this.load.image("penguin", "textures/penguin.png");
  }

  create() {
    this.scene.start(Game);
  }
}
