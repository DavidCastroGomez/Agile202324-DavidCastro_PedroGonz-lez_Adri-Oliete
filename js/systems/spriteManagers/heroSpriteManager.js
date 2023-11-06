class SpriteManager {

    constructor(_scene, _gameObject, _x, _y) {
        this.scene = _scene
        this.gameObject = _gameObject

        this.preloadSprites()
     }

    preloadSprites() {
        //bg

        this.tag = this.scene.load.spritesheet('hero', 'res/img/sprites/link_anim_sprite.png', { frameWidth: 18, frameHeight: 26 });
        //Other
    }

    create(){
        
    }

    loadAnimations() {
        loadLinkAnimations();
    }

    loadLinkAnimations() {
        //Idle
        this.scene.anims.create({
            key: 'idle_down',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle_left',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 74, end: 74 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle_right',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 74, end: 74 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle_up',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 148, end: 148 }),
            frameRate: 10,
            repeat: -1
        });

        // Walk 
        this.scene.anims.create({
            key: 'walk_down',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 1, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'walk_left',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 75, end: 83 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'walk_right',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 75, end: 83 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'walk_up',
            frames: this.scene.anims.generateFrameNumbers('hero', { start: 149, end: 156 }),
            frameRate: 10,
            repeat: -1
        });
    }


    playAnimations() {
        /*
        if (inpit.cursores.right.isDown) {
            link.anims.play('link_right', true);
        }
        else if (in)
        if (this.cursores.left.isDown) {
            anims.play('link_left', true);
        }
        if (this.cursores.up.isDown) {
            anims.play('link_up', true);
        }
        if (this.cursores.down.isDown) {
            anims.play('link_down', true);
        }*/
    }
}