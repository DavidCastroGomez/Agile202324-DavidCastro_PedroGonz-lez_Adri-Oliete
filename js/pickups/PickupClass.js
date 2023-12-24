class PickupClass extends Phaser.GameObjects.Sprite {

    constructor(_scene, _x, _y, _tag){
        super(_scene, _x, _y, _tag);
        
        this.PickupType = {
            HEART: 0, RUPEE: 1
        }

        this.scene = _scene;

        this.despawnTime = 5000;

        this.scene.add.existing(this);
        
        this.scene.physics.world.enable(this);

        this.body.setSize(8, 8);
        this.body.setOffset(0, 0);
        this.setAlpha(2);
        this.setOrigin(0.25, 0.25);

    }

    PickedUp(){
        this.setActive(false);
        this.setVisible(false);
        this.body.checkCollision.none = true;
    } 

    SpawnFromEnemy(_enemyPosition){
        this.x = _enemyPosition.x;
        this.y = _enemyPosition.y;

        this.setActive(true);
        this.setVisible(true);

        this.body.checkCollision.none = false;
    }

    DespawnAfterTime(){
        this.scene.time.delayedCall(this.despawnTime, () => {
            if(this.active)
                this.PickedUp();
        });        
    }

}