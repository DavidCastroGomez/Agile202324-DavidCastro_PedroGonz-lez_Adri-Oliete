class TestScene extends Phaser.Scene {
    constructor() {
        super({ key: 'testScene' });
    }

    preload() {
        //-------------------------------------------------------------General preload:
        this.cameras.main.setBackgroundColor("125");

        //-------------------------------------------------------------Map preload:
        this.load.setPath('res/maps');
        this.load.tilemapTiledJSON('testScene', 'TestMap.json');

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
        this.map = this.add.tilemap('testScene');

        this.map.addTilesetImage('Alttp_Tileset');

        this.map.createLayer('ground_layer', 'Alttp_Tileset');
        this.walls = this.map.createLayer('wall_layer', 'Alttp_Tileset');

        this.map.setCollisionByExclusion(-1, true, true, 'wall_layer');

        //-------------------------------------------------------------Hero creation:
        this.heroTest = new Hero(this, config.width / 2, config.height / 2, 3);
        this.heroTest.sprite.create();

        //-------------------------------------------------------------Enemy Test creation:
        this.enemyTest = new Enemy(this, config.width / 4, config.height / 2, 3);
        this.enemyTest.sprite.create();

        //-------------------------------------------------------------Enemy Pool JSon create:
        this.enemyPoolData = this.cache.json.get('EP_TestMap');
        this.enemyPoolData.length = 2;

        //-------------------------------------------------------------Pool loading:
        this.loadPools();

        //-------------------------------------------------------------Collision management creation:
        this.collisionManagement();

        //-------------------------------------------------------------Camera following:
        this.cameras.main.startFollow(this.heroTest);
        this.cameras.main.setBounds(0, 0, gamePrefs.gameWidth, gamePrefs.gameHeight);

        //-------------------------------------------------------------Debug keys:
        this.lifeUp = this.input.keyboard.addKey('Y');
        this.takeDamage = this.input.keyboard.addKey('T');
        this.restartScene = this.input.keyboard.addKey('R');
    }

    loadPools() {
        this.enemyPoolTest = this.physics.add.group();
        this.loadEnemies();
    }

    loadEnemies() {

        for (var i = 0; i < this.enemyPoolData.length; i++) {
            var row = this.enemyPoolData[i];
            var newEnemy = new Enemy(this, row.x, row.y);
            this.enemyPoolTest.add(newEnemy);
        }
    }

    collisionManagement() {
        this.physics.add.overlap(
            this.enemyPoolTest,
            this.heroTest,
            this.heroTest.GetHealthSystem().TakeDamage(0.5),
            null,
            this
        );
    }

    update(time, delta) {
        this.heroTest.update(delta);
        this.enemyTest.update(delta);

        if (this.lifeUp.isDown) {
            this.heroTest.GetHealthSystem().HealthUp(0.5);
            console.log(this.heroTest.GetHealthSystem().GetCurrentHealth());
        }
        if (this.takeDamage.isDown) {
            this.heroTest.GetHealthSystem().TakeDamage(0.5);
            console.log(this.heroTest.GetHealthSystem().GetCurrentHealth());
        }
        if (this.restartScene.isDown) {
            this.scene.restart();
        }
    }
}