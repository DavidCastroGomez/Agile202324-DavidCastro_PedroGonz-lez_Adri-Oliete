class SpriteManager {

    constructor(_scene) {
        this.scene = _scene;
    }

    preloadSprites() {
        //bg

        this.scene.load.spritesheet('hero', 'res/img/sprites/link_anim.png', { frameWidth: 18, frameHeight: 26 });
        //Other
    }


    
}