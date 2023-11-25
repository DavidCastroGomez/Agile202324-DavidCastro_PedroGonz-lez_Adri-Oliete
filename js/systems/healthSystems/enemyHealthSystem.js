class EnemyHealthSystem extends HealthSystem {
    constructor(_maxHealth, _scene, _self) { 
        super(_maxHealth, _scene, _self);
    }

    DieAction(){
        //Play death animation, wait till end and jump next line
        super.GetSelf().setActive(false);
        super.GetSelf().x=-200;
    }
}