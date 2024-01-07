class EnemyHealthSystem extends HealthSystem {
    constructor(_maxHealth, _currentHealth,  _scene, _owner) { 
        super(_maxHealth, _currentHealth,  _scene, _owner);
    }

    TakeDamage(_hitter){
        if(super.GetScene().audioManager && super.GetCurrentHealth() >= .5 && !super.IsInvincible()){
            super.GetScene().audioManager.playSFX('LTTP_Enemy_Hit');
        }
        super.TakeDamage(_hitter);
    }

    DieAction(){
        if(super.GetScene().audioManager){
            super.GetScene().audioManager.playSFX('LTTP_Enemy_Kill');
        }
        super.GetScene().SpawnPickups(this.GetOwner().body.position);
        super.GetOwner().setActive(false);
        super.GetOwner().x=-8000;
    }
}