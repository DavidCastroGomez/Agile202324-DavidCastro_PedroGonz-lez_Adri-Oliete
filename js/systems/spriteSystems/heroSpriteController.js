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
            frames: this.animation.generateFrameNumbers('hero', { start: 74, end: 74 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 74, end: 74 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 144, end: 144 }),
            frameRate: 10,
            repeat: -1
        });

        // Walk 
        this.animation.create({
            key: 'walk_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 1, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 75, end: 83 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 75, end: 83 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 149, end: 156 }),
            frameRate: 10,
            repeat: -1
        });

        //Combat
        this.animation.create({
            key: 'attack_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 37, end: 43 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'attack_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 111, end: 117 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'attack_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 111, end: 117 }),
            frameRate: 10,
            repeat: -1
        });
        this.animation.create({
            key: 'attack_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 185, end: 191 }),
            frameRate: 10,
            repeat: -1
        });

        //Picking Up
        this.animation.create({
            key: 'pick_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 25, end: 26 }),
            frameRate: 10,
            repeat: -1
        });
    }

    playAnimation(key) {
        this.animation.play(key, true);
    }
}