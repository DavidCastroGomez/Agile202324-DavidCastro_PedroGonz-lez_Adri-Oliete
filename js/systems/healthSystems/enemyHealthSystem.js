class EnemyHealthSystem extends HealthSystem {
    constructor(_maxHealth, _scene, _self) { 
        super(_maxHealth, _scene, _self);
    }

    DieAction(){
        //Play death animation, wait till end and jump next line
        super.self.setActive(false);
        super.self.x=-200;
    }
}