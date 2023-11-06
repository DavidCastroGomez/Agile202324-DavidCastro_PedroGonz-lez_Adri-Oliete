class Hero extends Character {

    constructor(_scene) {
        super(_scene, config.width / 2, config.height / 2, 'hero');

        //Sprite:
        this.sprite = new HeroSpriteController(this.anims);


        //Attacks:
        //super.attackSystem = new HeroAttackSystem();

        //Movement:
        super.SetMovementsystem(new MovementSystem(1, this, 2));

        //super.movementSystem.Walk()

        //Inputs:
        super.inputSystem = new HeroInputSystem(_scene, super.movementSystem, super.GetMovementSystem());
    }

    update() {
        super.update();
    }
}