class MapDoorLock extends Phaser.GameObjects.Sprite {

    constructor(_index, _angle, _entityToCollideWith, _actualScene, _posX, _posY, _sceneLocksOpen) {

        super(_actualScene, _posX, _posY, 'lock')
        _actualScene.add.existing(this);
        this.angle = _angle;
        
        _actualScene.physics.world.enable(this);

        this.body.setSize(20, 20);
        this.body.setOffset(0, 0);
        this.setAlpha(2);
        this.setOrigin(0.5, 0.5);

        this.body.checkCollision.none = false;

        this.entityToCollideWith = _entityToCollideWith;
        this.actualScene = _actualScene;
        this.index = _index;

        this.self = this;

        this.sceneLocksOpen = _sceneLocksOpen;

        this.collisionManagement();
    }

    collisionManagement(){

        this.actualScene.physics.add.collider(
            this.entityToCollideWith,
            this.self);

        this.body.setImmovable(true);

        this.actualScene.physics.add.overlap(
            this.entityToCollideWith.GetAttackSystem().GetHitbox(),
            this.self,
            this.lockInteraction,
            null,
            this
        );
    }

    lockInteraction(){
        console.log("Interaction with lock...");

        if(gamePrefs.heroKeys > 0){
            gamePrefs.heroKeys-=1;
            this.sceneLocksOpen[this.index] = true;
            console.log("Used key! I have " + gamePrefs.heroKeys + " keys now.");
            this.destroy();
        }
    }
}