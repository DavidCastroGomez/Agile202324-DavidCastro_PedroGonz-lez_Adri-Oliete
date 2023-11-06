class Hero extends Character
{

    constructor(_scene)
    {
        super(_scene);
        
        //Sprite:
        super.sprite = new SpriteManager(_scene, this, config.width/2,config.height/2);

        //Attacks:
        //super.attackSystem = new HeroAttackSystem();

        //Movement:
        super.SetMovementsystem(new MovementSystem(1, this, 2));

        //super.movementSystem.Walk()

        //Inputs:
        super.inputSystem = new HeroInputSystem(_scene, super.movementSystem, super.GetMovementSystem());
    }

    update(){
        super.update();
    }
}