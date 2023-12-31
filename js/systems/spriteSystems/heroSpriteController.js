class HeroSpriteController extends SpriteController {

    constructor(_owner) {
        super(_owner);
        _owner.body.setSize(14, 14).setOffset(11,19);

        this.chargeDir = 'down';
        this.isCharging = false;
    }

    create() {
        //Idle
        this.animation.create({
            key: 'idle_up',
            frames: this.animation.generateFrameNumbers('hero', { frames: [38] }),
            frameRate: 24
        });
        this.animation.create({
            key: 'idle_down',
            frames: this.animation.generateFrameNumbers('hero', { frames: [0] }),
            frameRate: 24

        });
        this.animation.create({
            key: 'idle_left',
            frames: this.animation.generateFrameNumbers('hero', { frames: [14] }),
            frameRate: 24
        });
        this.animation.create({
            key: 'idle_right',
            frames: this.animation.generateFrameNumbers('hero', { frames: [26] }),
            frameRate: 24
        });

        // Walk
        this.animation.create({
            key: 'walk_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 40, end: 47 }),
            frameRate: 24,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 2, end: 9 }),
            frameRate: 24,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 14, end: 21 }),
            frameRate: 24,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 26, end: 33 }),
            frameRate: 24,
            repeat: -1
        });

        //Combat
        //Attack
        this.animation.create({
            key: 'attack_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 93, end: 98 }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'attack_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 55, end: 60 }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'attack_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 69, end: 74 }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'attack_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 81, end: 86 }),
            frameRate: 24,
            repeat: 0
        });

        //Charging Attack
        this.animation.create({
            key: 'charging_attack_up',
            frames: this.animation.generateFrameNumbers('hero', { frames: [148] }),
            frameRate: 24
        });

        this.animation.create({
            key: 'charging_attack_down',
            frames: this.animation.generateFrameNumbers('hero', { frames: [110] }),
            frameRate: 24
        });
        this.animation.create({
            key: 'charging_attack_left',
            frames: this.animation.generateFrameNumbers('hero', { frames: [124] }),
            frameRate: 24
        });
        this.animation.create({
            key: 'charging_attack_right',
            frames: this.animation.generateFrameNumbers('hero', { frames: [136] }),
            frameRate: 24
        });

        //Charged
        this.animation.create({
            key: 'charged_attack_up',
            frames: this.animation.generateFrameNumbers('hero', { start: 150, end: 157 }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'charged_attack_down',
            frames: this.animation.generateFrameNumbers('hero', { start: 112, end: 119 }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'charged_attack_left',
            frames: this.animation.generateFrameNumbers('hero', { start: 126, end: 133 }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'charged_attack_right',
            frames: this.animation.generateFrameNumbers('hero', { start: 138, end: 145 }),
            frameRate: 24,
            repeat: 0
        });

        //taking damage
        this.animation.create({
            key: 'damaged_up',
            frames: this.animation.generateFrameNumbers('hero', { frames: [49] }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'damaged_down',
            frames: this.animation.generateFrameNumbers('hero', { frames: [11] }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'damaged_left',
            frames: this.animation.generateFrameNumbers('hero', { frames: [23] }),
            frameRate: 24,
            repeat: 0
        });
        this.animation.create({
            key: 'damaged_right',
            frames: this.animation.generateFrameNumbers('hero', { frames: [35] }),
            frameRate: 24,
            repeat: 0
        });
    
        //death
        this.animation.create({
            key: 'death',
            frames: this.animation.generateFrameNumbers('hero', { start: 93, end: 98 }),
            frameRate: 24,
            repeat: 0
        });
    }

    updateAnim(direction, action) {
        switch (action) {
            case 'idle':
                switch (direction) {
                    case 'up':
                        this.animation.play('idle_up', true);
                        break;
                    case 'down':
                        this.animation.play('idle_down', true);
                        break;
                    case 'left':
                        this.animation.play('idle_left', true);
                        break;
                    case 'right':
                        this.animation.play('idle_right', true);
                        break;
                }
                break;
            case 'walk':
                switch (direction) {
                    case 'up':
                        this.animation.play('walk_up', true);
                        break;
                    case 'down':
                        this.animation.play('walk_down', true);
                        break;
                    case 'left':
                        this.animation.play('walk_left', true);
                        break;
                    case 'right':
                        this.animation.play('walk_right', true);
                        break;
                }
                break;
            case 'attack':
                this.isCharging = false;
                switch (direction) {
                    case 'up':
                        this.animation.play('attack_up', true);
                        break;
                    case 'down':
                        this.animation.play('attack_down', true);
                        break;
                    case 'left':
                        this.animation.play('attack_left', true);
                        break;
                    case 'right':
                        this.animation.play('attack_right', true);
                        break;
                }
                break;
            case 'charging_attack':
                if (!this.isCharging) {
                    this.chargeDir = direction;
                    this.isCharging = true;
                }
                switch (this.chargeDir) {
                    case 'up':
                        this.animation.play('charging_attack_up', true);
                        break;
                    case 'down':
                        this.animation.play('charging_attack_down', true);
                        break;
                    case 'left':
                        this.animation.play('charging_attack_left', true);
                        break;
                    case 'right':
                        this.animation.play('charging_attack_right', true);
                        break;
                }
                break;
            case 'charged_attack':
                switch (this.chargeDir) {
                    case 'up':
                        this.animation.play('charged_attack_up', true);
                        break;
                    case 'down':
                        this.animation.play('charged_attack_down', true);
                        break;
                    case 'left':
                        this.animation.play('charged_attack_left', true);
                        break;
                    case 'right':
                        this.animation.play('charged_attack_right', true);
                        break;
                }
                break;
            case 'damaged':
                switch (direction) {
                    case 'up':
                        this.animation.play('damaged_up', true);
                        break;
                    case 'down':
                        this.animation.play('damaged_down', true);
                        break;
                    case 'left':
                        this.animation.play('damaged_left', true);
                        break;
                    case 'right':
                        this.animation.play('damaged_right', true);
                        break;
                }
                break;
            case 'dead':
                break;
            default:
                break;

        }

    }
}