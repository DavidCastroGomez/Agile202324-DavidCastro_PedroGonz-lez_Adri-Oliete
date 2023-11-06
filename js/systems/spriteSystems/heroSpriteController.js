class HeroSpriteController {

    constructor(_anims) {
        this.animation = _anims;
    }

    create() {
        //Idle
        this.animation.create({
            key: 'idle_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1,

        });
        this.animation.create({
            key: 'idle_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 27, end: 27 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 14, end: 14 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 40, end: 40 }),
            frameRate: 10,
            repeat: -1
        });

        // Walk 
        this.animation.create({
            key: 'walk_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 2, end: 12 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 29, end: 38 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 16, end: 25 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 42, end: 54 }),
            frameRate: 10,
            repeat: -1
        });

        //Combat
        this.animation.create({
            key: 'attack_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 55, end: 60 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'attack_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 70, end: 72 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'attack_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 83, end: 85 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'attack_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 96, end: 98  }),
            frameRate: 10,
            repeat: -1
        });

        //Picking Up
        this.animation.create({
            key: 'pick_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 113, end: 113 }),
            frameRate: 10,
            repeat: -1
        });
    }

    playAnimation(key) {
        this.animation.play(key, true);
    }
}