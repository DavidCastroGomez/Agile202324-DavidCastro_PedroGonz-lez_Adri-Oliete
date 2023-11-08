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
        //this.load.setPath('res/img/tilesets');
        //this.load.image('tiles', 'Alttp_Tileset.png');
        //this.load.image('tileset','Alttp_Lost_Woods.png');

        //this.load.setPath('res/maps');
        //this.load.tilemapTiledJSON('Map', 'TestMap.json');
        //this.load.tilemapTiledJSON('level','Alttp_Lost_Woods.json');      
        //this.load.spritesheet('hero', 'res/img/sprites/link_anim.png', { frameWidth: 18, frameHeight: 26 });
        this.spriteManager = new SpriteManager(this);

        this.spriteManager.preloadSprites();
    }

    create()
    {
        //-------------------------------------------------------------Map creation:
        //this.map = this.add.tilemap('Map');
        //this.map.addTilesetImage('tiles');
        //this.map.createLayer('ground_layer', 'tiles');

        //this.map = this.add.tilemap('level');
        //this.map.addTilesetImage('tileset');
        //this.map.createLayer('lost_woods','tileset');

        //-------------------------------------------------------------Hero creation:
        this.heroTest = new Hero(this);        
        this.heroTest.sprite.create();

        //-------------------------------------------------------------Camera following:
        //this.cameras.main.startFollow(this.heroTest);
        //this.cameras.main.setBounds(0,0,gamePrefs.level1Width,gamePrefs.level1Height);
    }

    update(time, delta){
        this.heroTest.update(delta);
    }
}

/*    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor("112"); 
        this.load.setPath('assets/sprites');
        this.load.image('bg','bg_green_tile.png');

        this.load.spritesheet('hero','hero.png',
        {frameWidth:32,frameHeight:32});

        this.load.setPath('assets/tilesets');
        this.load.image('walls_tileset','tileset_walls.png');
        this.load.image('moss_tileset','tileset_moss.png');
        
        this.load.setPath('assets/sounds');
        
        this.load.setPath('assets/maps');
        this.load.tilemapTiledJSON('level1','level1.json');
    }

    create()
    { //Pinta assets en pantalla
        //Pintamos el fondo
        this.add.tileSprite(0,0,gamePrefs.level1Width,gamePrefs.level1Height,'bg')
        .setOrigin(0);

        //Pintamos el nivel
        //Cargo el JSON
        this.map = this.add.tilemap('level1');
        //Cargo los tilesets
        this.map.addTilesetImage('walls_tileset');
        this.map.addTilesetImage('moss_tileset');
        //Pinto las CAPAS/LAYERS
        this.map.createLayer('layer_walls','walls_tileset');
        this.map.createLayer('layer_moss_up','moss_tileset');
        this.map.createLayer('layer_moss_left','moss_tileset');
        this.map.createLayer('layer_moss_right','moss_tileset');
        this.map.createLayer('layer_moss_bottom','moss_tileset');

        this.hero = this.physics.add.sprite(65,100,'hero');

        this.cameras.main.startFollow(this.hero);
        this.cameras.main.setBounds(0,0,
            gamePrefs.level1Width,gamePrefs.level1Height);

    }*/