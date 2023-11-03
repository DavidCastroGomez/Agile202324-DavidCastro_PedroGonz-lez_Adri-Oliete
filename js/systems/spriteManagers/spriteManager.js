class SpriteManager extends Phaser.GameObjects.Sprite
{
    constructor(_scene,_posX,_posY,_spriteTag)
    {
        super(_scene,_posX,_posY,_spriteTag);
            _scene.add.existing(this);
            _scene.physics.world.enable(this);
            this.body.collideWorldBounds = true;
            this.health=gamePrefs.MAX_HEALTH;
            this.nivel=_scene;            
    }
}