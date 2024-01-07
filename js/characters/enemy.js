class Enemy extends Character {

    constructor(_scene, _x, _y, _maxHealth, _currentHealth) {
        super(_scene, _x, _y, 'enemy', _maxHealth, _currentHealth);

        //Sprite:
        super.sprite = new EnemySpriteController(this);

        //Movement:
        super.SetMovementsystem(new MovementSystem(90, this, 1.5));

        //Inputs:
        super.inputSystem = new EnemyInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem(), this);

        //Health:
        super.healthSystem = new EnemyHealthSystem(_maxHealth, _currentHealth, _scene, this);
    }

    update(delta) {
        super.update(delta);
    }
}