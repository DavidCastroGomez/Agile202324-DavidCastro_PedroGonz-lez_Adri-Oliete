class Enemy extends Character {

    constructor(_scene, _x, _y, _maxHealth) {
        super(_scene, _x, _y, 'enemy', _maxHealth);

        //Sprite:
        super.sprite = new EnemySpriteController(this);
        this.sprite.create();

        //Movement:
        super.SetMovementsystem(new MovementSystem(120, this, 1.5));

        //Inputs:
        super.inputSystem = new EnemyInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem(), this);

        //Health:
        super.healthSystem = new EnemyHealthSystem(_maxHealth, _scene, this);

        //Attacks:
        //super.attackSystem = new AttackSystem(_scene, this, 2);
    }

    update(delta) {
        super.update(delta);
    }
}