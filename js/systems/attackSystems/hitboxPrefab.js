class HitboxPrefab extends Phaser.GameObjects.Sprite
{
    constructor(_scene,_posX,_posY, _delay){
        super(_scene,_posX,_posY)

        this.scene = _scene

        this.scene.physics.world.enable(this);
        
        //this.body.setCollideWorldBounds(true);
        //this.body.onWorldBounds = true;
        this.body.setSize(25, 25);
        this.body.setOffset(0, 0);
        this.setAlpha(0); 
        this.setOrigin(0);
        this.scene.add.existing(this);
    
        this.delay = _delay

        this.newBody = this.body

        this.setActive(false)

    }

    setNewPosition(posX, posY){


        this.newBody.position.x = posX
        this.newBody.position.y = posY

        this.setActive(true)

        
        this.scene.time.delayedCall(this.delay, () => {
            this.setActive(false)
        });
    }
    
}