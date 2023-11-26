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

        //-------------------------------------------------------------Enemy Pool JSon create:
        this.enemyPoolData = this.cache.json.get('EP_TestMap');
        this.enemyPoolData.length = 4;

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
            this.newEnemy = new Enemy(this, row.x, row.y, 0.5);
            this.newEnemy.sprite.create();
            this.enemyPoolTest.add(this.newEnemy);
        }
    }

    collisionManagement() {
        this.physics.add.overlap(
            this.heroTest,
            this.enemyPoolTest,
            this.heroTest.GetHealthSystem().TakeDamage,
            null,
            this.heroTest.GetHealthSystem()
        );

        this.physics.add.overlap(
            this.enemyPoolTest,
            this.heroTest.GetAttackSystem().GetHitbox(),
            this.hitSingleEnemy,
            null,
            this
        );
    }

    hitSingleEnemy(_swordHitBox, _enemy) {
        _enemy.GetHealthSystem().TakeDamage();
    }

    update(time, delta) {

        this.heroTest.update(delta);

        for (var i = 0; i < this.enemyPoolTest.children.entries.length; i++) {
            this.enemyPoolTest.getChildren()[i].update(delta)
        }

        if (this.restartScene.isDown) {
            this.scene.restart();
        }
    }
}