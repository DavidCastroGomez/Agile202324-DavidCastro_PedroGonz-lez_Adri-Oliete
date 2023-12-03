class Scene0_LinkHouse extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene0_LinkHouse' });
    }

    preload() {
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("0");

        //-------------------------------------------------------------Map preload:
        this.load.setPath('res/maps');
        this.load.tilemapTiledJSON('Map0_LinkHouse', 'Map0_LinkHouse.json');

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();

        //-------------------------------------------------------------Enemy Pool JSon preload:
        this.load.setPath('res/enemyPools');
        this.load.json('EP_TestMap', 'EP_TestMap.json');
    }

    create() {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();

        //-------------------------------------------------------------Map creation:
        this.map = this.add.tilemap('Map0_LinkHouse');

        this.map.addTilesetImage('Map0_LinkHouse');

        this.map.createLayer('ground_layer', 'Map0_LinkHouse');
        this.walls = this.map.createLayer('wall_layer', 'Map0_LinkHouse');

        this.map.setCollisionByExclusion(-1, true, true, 'wall_layer');

        this.starttingPosX = 0;
        this.starttingPosY = 0;

        //-------------------------------------------------------------Load map starts:
        this.loadMapStarts();

        //-------------------------------------------------------------Hero initialization:
        this.hero = new Hero(this, this.starttingPosX, this.starttingPosY, gamePrefs.heroHealth);

        //-------------------------------------------------------------Load map exits:
        this.loadMapExits();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.hero);
        this.cameras.main.setBounds(0, 0, gamePrefs.scene0_Width, gamePrefs.scene0_Height);
        this.cameras.main.zoom = 2;
        this.cameras.main.centerOn(0.5, 0.5);

        //-------------------------------------------------------------Debug keys:
        this.lifeUp = this.input.keyboard.addKey('Y');
        this.takeDamage = this.input.keyboard.addKey('T');
        this.restartScene = this.input.keyboard.addKey('R');
    }

    loadMapStarts(){
        this.game_elements = this.map.getObjectLayer('game_elements');
        this.game_elements.objects.forEach(function (element)
        {
            switch(element.type){
                case 'MapStart':{
                    if(gamePrefs.mapStartIndexToCharge == element.name){
                        this.starttingPosX = element.x;
                        this.starttingPosY = element.y;
                    }
                }
                break;
            }
        },this);
    }

    loadMapExits(){
        this.game_elements = this.map.getObjectLayer('game_elements');
        this.game_elements.objects.forEach(function (element)
        {
            switch(element.type){  
            case 'MapExit':{
                this.newMapExitTrigger = new MapExitTrigger(
                    element.properties[0].value,
                    element.properties[1].value,
                    this.hero, 
                    this,
                    element.x, 
                    element.y
                );
            }
            break;
            }
        },this);
    }

    update(time, delta) {
        this.hero.update(delta);
    }
}