class Hero extends Character
{
    preload(){
        //Sprites:
        this.load.setPath('assets/img/sprites');
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
        super.movementSystem = new MovementSystem(1, super.sprite, 2);

        //Inputs:
        super.inputSystem = new HeroInputSystem(_scene, super.movementSystem, super.attackSystem);
    }

    update(){
        super.update();
    }
}