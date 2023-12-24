class Hero extends Character {

    constructor(_scene, _x, _y, _maxHealth) {
        super(_scene, _x, _y, 'hero', _maxHealth);

        //Sprite:
        super.sprite = new HeroSpriteController(this);

        //Movement:
        super.SetMovementsystem(new MovementSystem(120, this, 1.5));

        //Inputs:
        super.inputSystem = new HeroInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem());

        //Health:
        super.healthSystem = new HeroHealthSystem(_maxHealth, _scene, this);
    }

    update(delta) {
        //console.log(this.state);
        super.update(delta);
    }
}