class SceneUI_StartScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneUI_StartScreen' });
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
        this.cameras.main.setBounds(0, 0, gamePrefs.mainScreen_Width, gamePrefs.mainScreen_Height);
        this.cameras.main.zoom = .5;

        //-------------------------------------------------------------Center on screen middle:
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
    }

    create() {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();

        //-------------------------------------------------------------Music play:
        this.audioManager.playMusic('SceneUI_StartScreen_MainTheme');

        //-------------------------------------------------------------Main Screen Image:
        this.mainScreenImage = this.add.video(gamePrefs.mainScreen_Width/2, gamePrefs.mainScreen_Height/2, 'MainScreen');
        this.mainScreenImage.play();
        this.mainScreenImage.on('complete', function () {
            this.audioManager.fadeOut();
            this.scene.restart();
        }, this);

        //-------------------------------------------------------------Spacebar input:
        this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //-------------------------------------------------------------Input counter:
        this.spacebarPressCount = 0;
    }

    update(time, delta) {

        if(this.start.isDown){
            this.audioManager.playSFX('LTTP_Menu_Select');
            this.audioManager.fadeOut();
            this.scene.start('SceneUI_TutorialScreen');
        }
    }
}