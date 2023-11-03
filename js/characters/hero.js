class Hero extends Character
{
    constructor(_scene)
    {
        super(_scene);

        //Sprites:
        this.load.setPath('assets/img');
        this.load.spritesheet('Hero','TestLink.png');
        super.sprite = new SpriteManager(_scene,config.width/2,config.height/2,'Hero');

        //Attacks:
        //super.attackSystem = new HeroAttackSystem();

        //Movement:
        super.movementSystem = new HeroMovementSystem();

        //Inputs:
        super.inputSystem = new HeroInputSystem(movementSystem, super.attackSystem);
    }

    update(){
        super.update();
    }
}