class SceneUI_FinalScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneUI_FinalScreen' });
    }

    preload() {
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("0");

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();
        
        //-------------------------------------------------------------Audio Manager preload:
        this.audioManager = new AudioManager(this);
        this.audioManager.preloadAudio();

        //-------------------------------------------------------------Camera options:
        this.cameras.main.setBounds(0, 0, gamePrefs.finalScreen_Width, gamePrefs.finalScreen_Height);
        this.cameras.main.zoom = 2;

        //-------------------------------------------------------------Center on screen middle:
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
    }

    create() {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();
        
        //-------------------------------------------------------------Music play:
        this.audioManager.playMusic('SceneUI_FinalScreen_ZeldasTheme');

        //-------------------------------------------------------------Tutorial Screen Image:
        this.tutorialImage = this.add.image(gamePrefs.finalScreen_Width/2, gamePrefs.finalScreen_Height/2, 'FinalScreen');

        //-------------------------------------------------------------Spacebar input:
        this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //-------------------------------------------------------------Input counter:
        this.spacebarPressCount = 0;
    }

    update(time, delta) {

        if(this.start.isDown){
            this.audioManager.fadeOut();
            gamePrefs.mapStartIndexToCharge = 0;
            this.scene.start('SceneUI_StartScreen');
        }
    }
}