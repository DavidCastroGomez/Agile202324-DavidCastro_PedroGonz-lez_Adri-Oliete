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
        this.load.setPath('res/img/tilesets');
        this.load.image('Alttp_Tileset','Alttp_Tileset.png');

        this.load.setPath('res/maps');
        this.load.tilemapTiledJSON('testScene','TestMap.json');

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();
    }

    create()
    {
        //-------------------------------------------------------------Map creation:
        this.map = this.add.tilemap('testScene');

        this.map.addTilesetImage('Alttp_Tileset');

        this.map.createLayer('ground_layer','Alttp_Tileset');
        this.walls = this.map.createLayer('wall_layer','Alttp_Tileset');

        this.map.setCollisionByExclusion(-1,true,true,'wall_layer'); 

        //-------------------------------------------------------------Hero creation:
        this.heroTest = new Hero(this);        
        this.heroTest.sprite.create();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.heroTest);
        this.cameras.main.setBounds(0,0,gamePrefs.gameWidth,gamePrefs.gameHeight);
    }

    update(time, delta){
        this.heroTest.update(delta);
    }
}