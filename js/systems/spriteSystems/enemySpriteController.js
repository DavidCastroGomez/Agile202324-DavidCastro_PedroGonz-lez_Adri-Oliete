class EnemySpriteController extends SpriteController {

    constructor(_owner) {
        super(_owner);
        _owner.body.setSize(16, 20);
    }

    create() {
        //Idle
        this.animation.create({
            key: 'idle_up',
            frames: this.animation.generateFrameNumbers('enemy', { start: 13, end: 14 }),
            frameRate: 12,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_down',
            frames: this.animation.generateFrameNumbers('enemy', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_left',
            frames: this.animation.generateFrameNumbers('enemy', { start: 5, end: 6 }),
            frameRate: 12,
            repeat: -1
        });
        this.animation.create({
            key: 'idle_right',
            frames: this.animation.generateFrameNumbers('enemy', { start: 9, end: 10 }),
            frameRate: 12,
            repeat: -1
        });

        // Walk
        this.animation.create({
            key: 'walk_up',
            frames: this.animation.generateFrameNumbers('enemy', { start: 30, end: 32 }),
            frameRate: 12,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_down',
            frames: this.animation.generateFrameNumbers('enemy', { start: 17, end: 20 }),
            frameRate: 12,
            repeat: -1
        });
        this.animation.create({
            key: 'walk_left',
            frames: this.animation.generateFrameNumbers('enemy', { start: 22, end: 24 }),
            frameRate: 12,
            repeat: -1,
            yoyo: true
        });
        this.animation.create({
            key: 'walk_right',
            frames: this.animation.generateFrameNumbers('enemy', { start: 26, end: 28 }),
            frameRate: 12,
            repeat: -1,
            yoyo: true
        });

        //Combat
    }


    updateAnim(direction, action) {
        switch (action) {
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
            case 'idle':
                switch (direction) {
                    case 'up':
                        //this.animation.play('idle_up', true);
                        break;
                    case 'down':
                        //this.animation.play('idle_down', true);
                        break;
                    case 'left':
                        //this.animation.play('idle_left', true);
                        break;
                    case 'right':
                        //this.animation.play('idle_right', true);
                        break;
                }
                break;
            default:
                break;

        }

    }
}