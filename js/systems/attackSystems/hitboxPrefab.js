class HitboxPrefab extends Phaser.GameObjects.Sprite
{
    constructor(_scene,_posX,_posY, delay){
        super(_scene,_posX,_posY)

        _scene.physics.world.enable(this);
        
        //this.body.setCollideWorldBounds(true);
        //this.body.onWorldBounds = true;
        this.body.setSize(25, 25);
        this.body.setOffset(0, 0);
        this.setAlpha(0); 
        _scene.add.existing(this).setOrigin(0);

        _scene.time.delayedCall(delay, () => {
            this.destroy();
        });
        

    }
    
}