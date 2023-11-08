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
        this.load.tilemapTiledJSON('level1','TestMap.json');

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();
    }

    create()
    {
        //-------------------------------------------------------------Map creation:
        //Pintamos el nivel
        //Cargo el JSON
        this.map = this.add.tilemap('level1');
        //Cargo los tilesets
        this.map.addTilesetImage('Alttp_Tileset');
        //Pinto las CAPAS/LAYERS
        this.map.createLayer('ground_layer','Alttp_Tileset');

        //-------------------------------------------------------------Hero creation:
        this.heroTest = new Hero(this);        
        this.heroTest.sprite.create();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.heroTest);
        this.cameras.main.setBounds(0,0,gamePrefs.level1Width,gamePrefs.level1Height);
    }

    update(){
        this.heroTest.update();
    }
}