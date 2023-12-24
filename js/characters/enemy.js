class Enemy extends Character {

    constructor(_scene, _x, _y, _maxHealth) {
        super(_scene, _x, _y, 'enemy', _maxHealth);

        //Sprite:
        super.sprite = new EnemySpriteController(this);

        //Movement:
        super.SetMovementsystem(new MovementSystem(100, this, 1.5));

        //Inputs:
        super.inputSystem = new EnemyInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem(), this);

        //Health:
        super.healthSystem = new EnemyHealthSystem(_maxHealth, _scene, this);
    }

    update(delta) {
        super.update(delta);
    }
}