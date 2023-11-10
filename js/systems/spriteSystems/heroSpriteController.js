class HeroSpriteController {

    constructor(_anims) {
        this.animation = _anims;
    }

    create() {
        //Idle
        this.animation.create({
            key: 'idle_down',
            frames: this.animation.generateFrameNumbers('hero', { frames: [0] }),
            frameRate: 30

        });
        this.animation.create({
            key: 'idle_left',
            frames: this.animation.generateFrameNumbers('hero', { frames: [14] }),
            frameRate: 30
        });
        this.animation.create({
            key: 'idle_right',
            frames: this.animation.generateFrameNumbers('hero', { frames: [27] }),
            frameRate: 30
        });
        this.animation.create({
            key: 'idle_up',
            frames: this.animation.generateFrameNumbers('hero', { frames: [40] }),
            frameRate: 30
        });

        // Walk 
        this.animation.create({
            key: 'walk_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 2, end: 12 }),
            frameRate: 30,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 16, end: 25 }),
            frameRate: 30,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 29, end: 38 }),
            frameRate: 30,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 42, end: 54 }),
            frameRate: 30,
            repeat: -1
        });

        //Combat
        //Attack
        this.animation.create({
            key: 'attack_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 165, end: 170 }),
            frameRate: 30
        });
        this.animation.create({
            key: 'attack_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 179, end: 183 }),
            frameRate: 30
        });
        this.animation.create({
            key: 'attack_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 192, end: 196 }),
            frameRate: 30
        });
        this.animation.create({
            key: 'attack_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 205, end: 209 }),
            frameRate: 30
        });

        //Charging Attack
        this.animation.create({
            key: 'charging_attack_down',
            frames: this.animation.generateFrameNumbers('hero', { frames: [55] }),
            frameRate: 30

        });
        this.animation.create({
            key: 'charging_attack_left',
            frames: this.animation.generateFrameNumbers('hero', { frames: [237] }),
            frameRate: 30
        });
        this.animation.create({
            key: 'charging_attack_right',
            frames: this.animation.generateFrameNumbers('hero', { frames: [247] }),
            frameRate: 30
        });
        this.animation.create({
            key: 'charging_attack_up',
            frames: this.animation.generateFrameNumbers('hero', { frames: [262] }),
            frameRate: 30
        });

        //Charged
        this.animation.create({
            key: 'charged_attack',
            frames: this.animation.generateFrameNumbers('hero', { start: 330, end: 344 }),
            frameRate: 30
        });

        //Picking Up
        this.animation.create({
            key: 'pick_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 113, end: 113 }),
            frameRate: 30,
            repeat: -1
        });
    }

    playAnimation(key) {
        this.animation.play(key, true);
    }

    updateAnim(direction, action) {
        switch (action) {
            case 'idle':
                switch (direction) {
                    case 'up':
                        this.animation.play('idle_up', true);
                        break;
                    case 'right':
                        this.animation.play('idle_right', true);
                        break;
                    case 'left':
                        this.animation.play('idle_left', true);
                        break;
                    case 'down':
                        this.animation.play('idle_down', true);
                        break;
                }
                break;
            case 'walk':
                switch (direction) {
                    case 'up':
                        this.animation.play('walk_up', true);
                        break;
                    case 'right':
                        this.animation.play('walk_right', true);
                        break;
                    case 'left':
                        this.animation.play('walk_left', true);
                        break;
                    case 'down':
                        this.animation.play('walk_down', true);
                        break;
                }
                break;
            case 'attack':
                switch (direction) {
                    case 'up':
                        this.animation.play('attack_up', true);
                        break;
                    case 'right':
                        this.animation.play('attack_right', true);
                        break;
                    case 'left':
                        this.animation.play('attack_left', true);
                        break;
                    case 'down':
                        this.animation.play('attack_down', true);
                        break;
                }
            case 'charging_attack':
                switch (direction) {
                    case 'up':
                        this.animation.chain('attack_up', 'charging_attack_up');
                        break;
                    case 'right':
                        this.animation.chain('attack_right', 'charging_attack_right');
                        break;
                    case 'left':
                        this.animation.chain('attack_left', 'charging_attack_left');
                        break;
                    case 'down':
                        this.animation.chain('attack_down', 'walk_down');
                        break;
                }
                break;
            case 'charged_attack':
                this.animation.play('charged_attack', true);
                break;
            case 'pick_up':
                this.animation.play('pick_up', true);
                break;
            default:
                break;

        }

    }
}