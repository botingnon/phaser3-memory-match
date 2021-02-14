import Phaser from "phaser";

const createCharacterAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "down-idle",
    frames: [{ key: "sokoban", frame: 52 }],
  });

  anims.create({
    key: "down-walk",
    frames: anims.generateFrameNumbers("sokoban", {
      start: 52,
      end: 54,
    }),
    frameRate: 10,
    repeat: -1,
  });

  anims.create({
    key: "up-idle",
    frames: [{ key: "sokoban", frame: 55 }],
  });

  anims.create({
    key: "up-walk",
    frames: anims.generateFrameNumbers("sokoban", {
      start: 55,
      end: 57,
    }),
    frameRate: 10,
    repeat: -1,
  });

  anims.create({
    key: "left-idle",
    frames: [{ key: "sokoban", frame: 81 }],
  });

  anims.create({
    key: "left-walk",
    frames: anims.generateFrameNumbers("sokoban", {
      start: 81,
      end: 83,
    }),
    frameRate: 10,
    repeat: -1,
  });

  anims.create({
    key: "right-idle",
    frames: [{ key: "sokoban", frame: 78 }],
  });

  anims.create({
    key: "right-walk",
    frames: anims.generateFrameNumbers("sokoban", {
      start: 78,
      end: 80,
    }),
    frameRate: 10,
    repeat: -1,
  });
};

export { createCharacterAnims };
