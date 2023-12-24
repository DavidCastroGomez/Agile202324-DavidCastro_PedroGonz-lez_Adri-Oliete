class SceneUI_TutorialScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneUI_TutorialScreen' });
    }

    preload() {
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("0");

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();

        //-------------------------------------------------------------Camera options:
        this.cameras.main.setBounds(0, 0, gamePrefs.tutoScreen_Width, gamePrefs.tutoScreen_Height);
        this.cameras.main.zoom = .25;

        //-------------------------------------------------------------Center on screen middle:
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
    }

    create() {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();

        //-------------------------------------------------------------Tutorial Screen Image:
        this.tutorialImage = this.add.image(gamePrefs.tutoScreen_Width/2, gamePrefs.tutoScreen_Height/2, 'InputTutorial');

        //-------------------------------------------------------------Spacebar input:
        this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //-------------------------------------------------------------Input counter:
        this.spacebarPressCount = 0;
    }

    update(time, delta) {

        if(this.start.isDown){
            this.scene.start('Scene0_LinkHouse');
        }
    }
}