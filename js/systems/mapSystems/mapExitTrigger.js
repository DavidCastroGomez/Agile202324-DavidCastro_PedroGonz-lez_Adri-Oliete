class MapExitTrigger extends Phaser.GameObjects.Sprite {

    constructor(_mapStartIndex, _sceneToCharge, _entityToCollideWith, _actualScene, _posX, _posY) {

        super(_actualScene, _posX, _posY)
        
        _actualScene.physics.world.enable(this);

        this.body.setSize(16, 16);
        this.body.setOffset(0, 0);
        this.setAlpha(0);
        this.setOrigin(0.25, 0.25);
        _actualScene.add.existing(this);

        this.body.checkCollision.none = false;

        this.mapStartIndex = _mapStartIndex;
        this.sceneToCharge = _sceneToCharge;
        this.entityToCollideWith = _entityToCollideWith;
        this.actualScene = _actualScene;

        this.self = this;

        this.collisionManagement();
    }

    collisionManagement(){
        this.actualScene.physics.add.overlap(
            this.entityToCollideWith,
            this.self,
            this.exitToNextScene,
            null,
            this
        );
    }

    exitToNextScene(){
        gamePrefs.mapStartIndexToCharge = this.mapStartIndex;
        gamePrefs.heroHealth = this.entityToCollideWith.GetHealthSystem().currentHealth;
        if(this.actualScene.audioManager){
            this.actualScene.audioManager.playSFX('LTTP_TravessingExit');
            this.actualScene.audioManager.fadeOut();
        }
        this.actualScene.scene.start(this.sceneToCharge);
    }
}