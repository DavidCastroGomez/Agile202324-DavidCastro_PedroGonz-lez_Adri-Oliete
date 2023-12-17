class Scene3_HyruleCastle extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene3_HyruleCastle' });
    }

    preload() {
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("0");

        //-------------------------------------------------------------Map preload:
        this.load.setPath('res/maps');
        this.load.tilemapTiledJSON('Map3_HyruleCastle', 'Map3_HyruleCastle.json');

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();
    }

    create() {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();

        //-------------------------------------------------------------Map creation:
        this.map = this.add.tilemap('Map3_HyruleCastle');

        this.map.addTilesetImage('Map3_HyruleCastle');

        this.map.createLayer('ground_layer', 'Map3_HyruleCastle');
        this.walls = this.map.createLayer('wall_layer', 'Map3_HyruleCastle');
        this.map.createLayer('ceiling_layer', 'Map3_HyruleCastle').setDepth(2);
        this.map.createLayer('maximum_layer', 'Map3_HyruleCastle').setDepth(3);

        this.map.setCollisionByExclusion(-1, true, true, 'wall_layer');
        this.map.setCollisionByExclusion(-1, true, true, 'maximum_layer');

        this.starttingPosX = 0;
        this.starttingPosY = 0;

        //-------------------------------------------------------------Load map starts:
        this.loadMapStarts();

        //-------------------------------------------------------------Hero initialization:
        this.hero = new Hero(this, this.starttingPosX, this.starttingPosY, gamePrefs.heroHealth);

        //-------------------------------------------------------------Load map exits:
        this.loadMapExits();

        //-------------------------------------------------------------Load Enemy Pool:
        this.enemyPoolTest = this.physics.add.group();
        this.loadEnemyPool();

        //-------------------------------------------------------------Load map exits:
        this.loadDoorLocks();            

        //-------------------------------------------------------------Collision management creation:
        this.collisionManagement();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.hero);
        this.cameras.main.setBounds(0, 0, gamePrefs.scene3_Width, gamePrefs.scene3_Height);
        this.cameras.main.zoom = 2;
        this.cameras.main.centerOn(0.5, 0.5);

        //-------------------------------------------------------------Debug keys:
        this.lifeUp = this.input.keyboard.addKey('Y');
        this.takeDamage = this.input.keyboard.addKey('T');
        this.restartScene = this.input.keyboard.addKey('R');
    }

    loadEnemyPool() {
        this.game_elements = this.map.getObjectLayer('game_elements');
        this.game_elements.objects.forEach(function (element)
        {
            switch(element.type){
                case 'EnemySpawn':{
                    this.newEnemy = new Enemy(this, element.x, element.y, 0.5);
                    this.enemyPoolTest.add(this.newEnemy);
                }
                break;
            }
        },this);
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

    loadDoorLocks(){
        this.game_elements = this.map.getObjectLayer('game_elements');
        var iter = 0;
        this.game_elements.objects.forEach(function (element)
        {
            switch(element.type){  
            case 'DoorLock':{
                if(gamePrefs.scene3_LocksOpen.length == 0 || gamePrefs.scene3_LocksOpen[iter] == false){
                    this.newMapExitTrigger = new MapDoorLock(
                        iter,
                        element.properties[0].value,
                        this.hero, 
                        this,
                        element.x, 
                        element.y,
                        gamePrefs.scene3_LocksOpen
                    );
                    gamePrefs.scene3_LocksOpen.push(false);
                    iter++;
                }
            }
            break;
            }
        },this);
    }

    collisionManagement() {
        this.physics.add.overlap(
            this.hero,
            this.enemyPoolTest,
            this.hero.GetHealthSystem().TakeDamage,
            null,
            this.hero.GetHealthSystem()
        );

        this.physics.add.overlap(
            this.enemyPoolTest,
            this.hero.GetAttackSystem().GetHitbox(),
            this.hitSingleEnemy,
            null,
            this
        );
    }

    hitSingleEnemy(_swordHitBox, _enemy) {
        _enemy.GetHealthSystem().TakeDamage();
    }

    getWalls(){
        return this.walls;
    }

    getHero(){
        return this.hero;
    }

    update(time, delta) {

        this.hero.update(delta);

        for (var i = 0; i < this.enemyPoolTest.children.entries.length; i++) {
            this.enemyPoolTest.getChildren()[i].update(delta)
        }
    }
}