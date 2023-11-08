class SpriteManager {

    constructor(_scene) {
        this.scene = _scene;
    }

    preloadSprites() {
        this.scene.load.setPath('res/img/sprites');
        this.scene.load.spritesheet('hero', 'link_anim.png', { frameWidth: 18, frameHeight: 26 });
    }
}