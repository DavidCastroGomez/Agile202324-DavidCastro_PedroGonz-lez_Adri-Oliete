class hitboxPrefab extends Phaser.GameObjects.Sprite
{
    constructor(_scene,_posX,_posY, delay){
        super(_scene,_posX,_posY)
        this.body.setCollideWorldBounds(true);
        this.body.onWorldBounds = true;
        this.body.setSize(100, 100);
        this.body.setOffset(0, 0);
        this.setAlpha(0); 
        scene.add.existing(this);

        scene.time.delayedCall(delay, () => {
            this.destroy();
        });

    }
    
}