class SpriteManager {

    constructor(_scene) {
        this.scene = _scene;
    }

    preloadSprites() {
        this.scene.load.setPath('res/img/tilesets');
        this.scene.load.image('Alttp_Tileset', 'Alttp_Tileset.png');
        this.scene.load.image('Map0_LinkHouse', 'Map0_LinkHouse.png');
        this.scene.load.image('Map1_Overworld', 'Map1_Overworld.png');


        this.scene.load.setPath('res/img/sprites');

        this.scene.load.spritesheet('hero', 'link_anim.png', { frameWidth: 36, frameHeight: 52 });
        this.scene.load.spritesheet('enemy', 'soldier_anim.png', { frameWidth: 36, frameHeight: 40 });
    }
}