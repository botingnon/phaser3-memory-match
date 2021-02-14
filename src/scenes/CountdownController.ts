import Phaser from "phaser";
import { ResolveProjectReferencePathHost } from "typescript";

export default class CountdownController {
  private scene: Phaser.Scene;
  private label: Phaser.GameObjects.Text;
  private timeEvent: Phaser.Time.TimerEvent;
  private duration: number = 0;
  private finishedCallback: Function;

  constructor(scene: Phaser.Scene, label: Phaser.GameObjects.Text) {
    this.scene = scene;
    this.label = label;
  }

  start(callback: Function, duration: number = 45000) {
    this.stop();

    this.duration = duration;
    this.finishedCallback = callback;

    this.timeEvent = this.scene.time.addEvent({
      delay: duration,
      callback: () => {
        this.stop();

        this.label.setText("0");

        if (callback) {
          callback();
        }
      },
    });
  }

  stop() {
    if (this.timeEvent) {
      this.timeEvent.destroy();
      this.timeEvent = undefined;
    }
  }

  update() {
    if (!this.timeEvent || this.duration <= 0) {
      return;
    }

    const elapsed = this.timeEvent.getElapsed();
    const remaining = this.duration - elapsed;
    const seconds = remaining / 1000;

    this.label.setText(seconds.toFixed(2));
  }
}
