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

        //-------------------------------------------------------------Audio Manager preload:
        this.audioManager = new AudioManager(this);
        this.audioManager.preloadAudio();

        //-------------------------------------------------------------UI:
        this.heartUI = [];
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

        //-------------------------------------------------------------Music play:
        this.audioManager.playMusic('Scene0_LinkHouse_KakarikoVillage');

        //-------------------------------------------------------------Load map starts:
        this.loadMapStarts();

        //-------------------------------------------------------------Hero initialization:
        this.hero = new Hero(this, this.starttingPosX, this.starttingPosY, gamePrefs.heroHealth);

        //-------------------------------------------------------------UI:
        this.lifeUI = this.add.image(150, 100, 'Life')
            .setOrigin(0)
            .setScrollFactor(0)
            .setDepth(10);
        this.heartUI = this.add.sprite(150, 110, 'Heart', (this.hero.GetHealth().GetCurrentHealth() * 2))
            .setOrigin(0)
            .setScrollFactor(0)
            .setDepth(10);
        this.moneyUI = this.add.image(220, 100, 'rupee')
            .setOrigin(0)
            .setScrollFactor(0)
            .setDepth(10);
        this.rupeeUIText = this.add.bitmapText(
            230, 115, 'UIFont', 'x00', 5)
            .setOrigin(1, 0)
            .setScrollFactor(0)
            .setDepth(10);
            
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

    loadMapStarts() {
        this.game_elements = this.map.getObjectLayer('game_elements');
        this.game_elements.objects.forEach(function (element) {
            switch (element.type) {
                case 'MapStart': {
                    if (gamePrefs.mapStartIndexToCharge == element.name) {
                        this.starttingPosX = element.x;
                        this.starttingPosY = element.y;
                    }
                }
                    break;
            }
        }, this);
    }

    getWalls() {
        return this.walls;
    }

    getHero() {
        return this.hero;
    }

    loadMapExits() {
        this.game_elements = this.map.getObjectLayer('game_elements');
        this.game_elements.objects.forEach(function (element) {
            switch (element.type) {
                case 'MapExit': {
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
        }, this);
    }

    update(time, delta) {
        this.hero.update(delta);
        this.heartUI.setFrame((this.hero.GetHealth().GetCurrentHealth() * 2));
        this.rupeeUIText.text = 'x' + ('0' + this.hero.GetMoneySystem().GetMoney()).slice(-2);
    }
}