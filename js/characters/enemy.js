class Enemy extends Character {

    constructor(_scene, _x, _y,_maxHealth) {
        super(_scene, _x, _y, 'enemy');

        //Sprite:
        //super.sprite = new HeroSpriteController(this.anims);

        //Movement:
        super.SetMovementsystem(new MovementSystem(120, this, 1.5));

        //Inputs:
        super.inputSystem = new EnemyInputSystemInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem(), this);
        
        //Health:
        super.healthSystem = new EnemyHealthSystem(_scene,_maxHealth);

        //Attacks:
        //super.attackSystem = new AttackSystem(_scene, this, 2);
        
    }

    update(delta) {
        super.update(delta);
    }
}