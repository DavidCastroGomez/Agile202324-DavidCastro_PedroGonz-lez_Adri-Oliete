class HealthSystem {
    constructor(_maxHealth, _scene, _owner) { 
        this.maxHealth = _maxHealth;
        this.currentHealth = _maxHealth;
        this.scene = _scene;
        this.owner = _owner;
        
        this.invincible = false;
    }

    TakeDamage(){
        if(!this.invincible){
            this.tempHealth = this.currentHealth - 0.5;
            if(this.tempHealth > 0){
                this.currentHealth = this.tempHealth;
                this.InvulnerabilityTime();
                //this.owner.state = 'damaged';
            }
            else if(this.tempHealth <= 0){
                this.currentHealth = 0;
                this.DieAction();
                this.invincible = true;
                //this.owner.state = 'dead';
            }
        }
    }

    HealthUp(){
        var tempHealth = this.currentHealth + 0.5;
        if(tempHealth <= this.maxHealth){
            this.currentHealth = tempHealth;
        }
        else if(tempHealth > this.maxHealth){
            this.currentHealth = this.maxHealth;
        }
    }

    InvulnerabilityTime(){
        
        this.invincible = true;
        this.scene.time.delayedCall(1000, () => {
                if(this.invincible){
                    this.invincible = false;
                }
        });
    }

    DieAction(){
        //Overrided in child classes
    }

    GetCurrentHealth(){
        return this.currentHealth;
    }

    IsDead(){
        return this.currentHealth == 0;
    }

    GetMaxHealth(){
        return this.maxHealth;
    }

    GetScene(){
        return this.scene;
    }

    GetOwner(){
        return this.owner;
    }
}