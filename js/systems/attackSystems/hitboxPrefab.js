class HitboxPrefab extends Phaser.GameObjects.Sprite {
    constructor(_scene, _posX, _posY) {

        super(_scene, _posX, _posY)

        this.scene = _scene

        this.scene.physics.world.enable(this);

        //this.body.setCollideWorldBounds(true);
        //this.body.onWorldBounds = true;
        this.body.setSize(25, 25);
        this.body.setOffset(-6, -6);
        this.setAlpha(0);
        this.setOrigin(0, 0);
        this.scene.add.existing(this);

        this.body.checkCollision.none = false;

    }

    setNewPosition(posX, posY) {
        this.x = posX
        this.y = posY
    }



    activeAttack(_delay, owner) {
        this.delay = _delay

        owner.movementSystem.CanMove(false)

        this.body.checkCollision.none = false;

        this.scene.time.delayedCall(this.delay, () => {
            this.body.checkCollision.none = true;
            owner.movementSystem.CanMove(true)
            //owner.state = 'idle';
        });
    }

}