class EnemyHealthSystem extends HealthSystem {
    constructor(_maxHealth, _scene, _owner) { 
        super(_maxHealth, _scene, _owner);
    }

    DieAction(){
        //Play death animation, wait till end and jump next line
        super.GetOwner().setActive(false);
        super.GetOwner().x=-8000;
    }
}