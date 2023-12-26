class Scene1_Overworld extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene1_Overworld' });
    }

    preload() {
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("0");

        //-------------------------------------------------------------Map preload:
        this.load.setPath('res/maps');
        this.load.tilemapTiledJSON('Map1_Overworld', 'Map1_Overworld.json');

        //-------------------------------------------------------------Sprite Manager preload:
        this.spriteManager = new SpriteManager(this);
        this.spriteManager.preloadSprites();
        
        //-------------------------------------------------------------Audio Manager preload:
        this.audioManager = new AudioManager(this);
        this.audioManager.preloadAudio();
    }

    create() {
        //-------------------------------------------------------------Camera fade in:
        this.cameras.main.fadeIn();
        
        //-------------------------------------------------------------Music play:
        this.audioManager.playMusic('Scene1_Overworld_SealOfTheSevenMaidens');

        //-------------------------------------------------------------Map creation:
        this.map = this.add.tilemap('Map1_Overworld');

        this.map.addTilesetImage('Map1_Overworld');

        this.map.createLayer('ground_layer', 'Map1_Overworld');
        this.walls = this.map.createLayer('wall_layer', 'Map1_Overworld');

        this.map.setCollisionByExclusion(-1, true, true, 'wall_layer');

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

        //-------------------------------------------------------------Load PickUps Pool:
        this.heartPickupPool = this.physics.add.group();
        this.rupeePickupPool = this.physics.add.group();

        //-------------------------------------------------------------Collision management creation:
        this.collisionManagement();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.hero);
        this.cameras.main.setBounds(0, 0, gamePrefs.scene1_Width, gamePrefs.scene1_Height);
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
                    this.newEnemy = new Enemy(this, element.x, element.y, gamePrefs.enemyHealth);
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

    collisionManagement() {
        this.physics.add.overlap(
            this.hero,
            this.enemyPoolTest,
            this.hitHero,
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

        this.physics.add.overlap(
            this.heartPickupPool,
            this.hero,
            this.getPickUp,
            null,
            this
        );

        this.physics.add.overlap(
            this.rupeePickupPool,
            this.hero,
            this.getPickUp,
            null,
            this
        );
    }

    hitSingleEnemy(_swordHitBox, _enemy) {
        _enemy.GetHealthSystem().TakeDamage(_swordHitBox);
    }

    hitHero(_hero, _enemy){
        _hero.GetHealthSystem().TakeDamage(_enemy);
    }

    getPickUp(_hero, _pickup){
        _pickup.PickedUp(_hero);
    }

    SpawnPickups(enemyPosition){
        //hearts

        enemyPosition.y -= 20;

        var spawnHeart = Phaser.Math.Between(0, 1);
        if(spawnHeart == 1){
            var _pickup = this.heartPickupPool.getFirst(false);

            if(!_pickup)
            {
                _pickup = new HeartPickup(this, enemyPosition.x, enemyPosition.y);
                this.heartPickupPool.add(_pickup);
            }else
            {
                _pickup.SpawnFromEnemy(enemyPosition);
            }
        }

        //rupee

        var spawnRupee = Phaser.Math.Between(0, 6);

        for(let i = 0; i < spawnRupee/2; i++){
            var _pickup = this.rupeePickupPool.getFirst(false);

            if(!_pickup)
            {
                _pickup = new RupeePickup(this, enemyPosition.x, enemyPosition.y);
                this.rupeePickupPool.add(_pickup);
            }else
            {
                _pickup.SpawnFromEnemy(enemyPosition);
            }
        }
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