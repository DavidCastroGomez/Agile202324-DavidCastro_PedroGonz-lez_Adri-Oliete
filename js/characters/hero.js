class Hero extends Character
{
    preload(){
        //Sprites:
        this.load.setPath('assets/img');
        this.load.spritesheet('Hero','TestLink.png');
    }

    constructor(_scene)
    {
        super(_scene);
        
        //Sprite:
        super.sprite = new SpriteManager(_scene,config.width/2,config.height/2,'Hero');

        //Attacks:
        //super.attackSystem = new HeroAttackSystem();

        //Movement:
        super.movementSystem = new HeroMovementSystem();

        //Inputs:
        super.inputSystem = new HeroInputSystem(this.movementSystem, super.attackSystem);
    }

    update(){
        super.update();
    }
}