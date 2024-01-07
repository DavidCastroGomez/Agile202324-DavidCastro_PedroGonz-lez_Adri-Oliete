class SpriteManager {

    constructor(_scene) {
        this.scene = _scene;
    }

    preloadSprites() {

        //-------------------------------------------------------------UI:
        this.scene.load.setPath('res/img/ui');
        this.scene.load.video('MainScreen', 'MainScreenShort.mp4');
        this.scene.load.image('InputTutorial', 'InputTutorial.png');
        this.scene.load.image('FinalScreen', 'FinalScreen.png');
        this.scene.load.image('Life', 'LifeUI.png');
        this.scene.load.spritesheet('Heart', 'HeartUI.png', { frameWidth: 41, frameHeight: 8 });

        this.scene.load.setPath('res/img/fonts');
        this.scene.load.bitmapFont('UIFont','gameFont.png','gameFont.xml');

        //-------------------------------------------------------------Maps:
        this.scene.load.setPath('res/img/tilesets');
        this.scene.load.image('Alttp_Tileset', 'Alttp_Tileset.png');
        this.scene.load.image('Map0_LinkHouse', 'Map0_LinkHouse.png');
        this.scene.load.image('Map1_Overworld', 'Map1_Overworld.png');
        this.scene.load.image('Map2_TheWell', 'Map2_TheWell.png');
        this.scene.load.image('Map3_HyruleCastle', 'Map3_HyruleCastle.png');
        this.scene.load.image('Map4_Catacombs', 'Map4_Catacombs.png');
        this.scene.load.image('Map5_SewersToTheSanctuary', 'Map5_SewersToTheSanctuary.png');

        //-------------------------------------------------------------Characters:
        this.scene.load.setPath('res/img/sprites');
        this.scene.load.spritesheet('hero', 'link_anim.png', { frameWidth: 36, frameHeight: 52 });
        this.scene.load.spritesheet('enemy', 'soldier_anim.png', { frameWidth: 36, frameHeight: 40 });

        //-------------------------------------------------------------Items:
        this.scene.load.image('key', 'Key.png');
        this.scene.load.image('lock', 'Lock.png');
        this.scene.load.image('heart', 'Heart.png');
        this.scene.load.image('rupee', 'Rupee.png');
    }
}