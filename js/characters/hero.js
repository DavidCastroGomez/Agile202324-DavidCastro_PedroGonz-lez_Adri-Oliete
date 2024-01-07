class Hero extends Character {

    constructor(_scene, _x, _y, _maxHealth, _currentHealth) {
        super(_scene, _x, _y, 'hero', _maxHealth, _currentHealth);

        //Sprite:
        super.sprite = new HeroSpriteController(this);

        //Movement:
        super.SetMovementsystem(new MovementSystem(100, this, 1.4));

        //Inputs:
        super.inputSystem = new HeroInputSystem(_scene, super.GetAttackSystem(), super.GetMovementSystem());

        //Health:
        super.healthSystem = new HeroHealthSystem(_maxHealth, _currentHealth, _scene, this);

        this.moneySystem = new MoneySystem();
    }

    GetMoneySystem(){
        return this.moneySystem;
    }

    GetHealth(){
        return this.healthSystem;
    }


    update(delta) {
        super.update(delta);
    }
}