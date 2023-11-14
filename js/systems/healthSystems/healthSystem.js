class HealthSystem {
    constructor(_maxHealth, _scene, _self) { 
        this.maxHealth = _maxHealth;
        this.currentHealth = this.maxHealth;
        this.scene = _scene;
        this.self = _self;
    }

    TakeDamage(_healthSubstraction){
        var tempHealth = this.currentHealth - _healthSubstraction;
        if(tempHealth > 0){
            this.currentHealth = tempHealth;
        }
        else if(tempHealth <= 0){
            this.currentHealth = 0;
            this.DieAction();
        }
    }

    HealthUp(_healthAdditive){
        var tempHealth = this.currentHealth + _healthAdditive;
        if(tempHealth <= this.maxHealth){
            this.currentHealth = tempHealth;
        }
        else if(tempHealth > this.maxHealth){
            this.currentHealth = this.maxHealth;
        }
    }

    DieAction(){
        //Overrided in child classes
    }

    GetCurrentHealth(){
        return this.currentHealth;
    }

    GetMaxHealth(){
        return this.maxHealth;
    }
}