class Hero extends Character {

    constructor(_scene) {
        super(_scene, config.width / 2, config.height / 2, 'hero');

        //Sprite:
        //super.sprite = new HeroSpriteController(this.anims);


        //Attacks:
        //super.attackSystem = new AttackSystem(_scene, this, 2);

        //Movement:
        super.SetMovementsystem(new MovementSystem(120, this, 1.5));

        //super.movementSystem.Walk()

        //Inputs:
        //super.inputSystem = new HeroInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem());
    }

    update(delta) {
        super.update(delta);
    }
}