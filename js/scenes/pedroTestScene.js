class PedroTestScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'pedroTestScene'});
    }

    preload()
    { 
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("125");

        //-------------------------------------------------------------Map preload:
        this.load.setPath('res/maps');
        this.load.tilemapTiledJSON('testScene','TestMap.json');

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();
    }

    create()
    {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();

        //-------------------------------------------------------------Map creation:
        this.map = this.add.tilemap('testScene');

        this.map.addTilesetImage('Alttp_Tileset');

        this.map.createLayer('ground_layer','Alttp_Tileset');
        this.walls = this.map.createLayer('wall_layer','Alttp_Tileset');

        this.map.setCollisionByExclusion(-1,true,true,'wall_layer'); 

        //-------------------------------------------------------------Hero creation:
        this.heroTest = new Hero(this, 3);
        this.heroTest.sprite.create();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.heroTest);
        this.cameras.main.setBounds(0,0,gamePrefs.gameWidth,gamePrefs.gameHeight);

        //-------------------------------------------------------------Debug keys:
        this.lifeUp = this.input.keyboard.addKey('Y');
        this.takeDamage = this.input.keyboard.addKey('T');
        this.restartScene = this.input.keyboard.addKey('R');
    }

    update(time, delta){
        this.heroTest.update(delta);

        if(this.lifeUp.isDown){
            this.heroTest.GetHealthSystem().HealthUp(0.5);
            console.log(this.heroTest.GetHealthSystem().GetCurrentHealth());
        }
        if(this.takeDamage.isDown){
            this.heroTest.GetHealthSystem().TakeDamage(0.5);
            console.log(this.heroTest.GetHealthSystem().GetCurrentHealth());
        }
        if(this.restartScene.isDown){
            this.scene.restart();
        }
    }
}