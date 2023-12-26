class ItemKey extends Phaser.GameObjects.Sprite {

    constructor(_entityToCollideWith, _actualScene, _posX, _posY) {

        super(_actualScene, _posX, _posY, 'key')
        _actualScene.add.existing(this);
        
        _actualScene.physics.world.enable(this);

        this.body.setSize(16, 16);
        this.body.setOffset(0, 0);
        this.setAlpha(2);
        this.setOrigin(0.25, 0.25);

        this.body.checkCollision.none = false;

        this.entityToCollideWith = _entityToCollideWith;
        this.actualScene = _actualScene;

        this.self = this;

        this.collisionManagement();
    }

    collisionManagement(){
        this.actualScene.physics.add.overlap(
            this.entityToCollideWith,
            this.self,
            this.addKey,
            null,
            this
        );
    }

    addKey(){
        if(this.actualScene.audioManager){
            this.actualScene.audioManager.playSFX('LTTP_Key');
        }
        gamePrefs.heroKeys += 1;
        console.log("Got key! I have " + gamePrefs.heroKeys + " keys now.");
        this.destroy();
    }
}