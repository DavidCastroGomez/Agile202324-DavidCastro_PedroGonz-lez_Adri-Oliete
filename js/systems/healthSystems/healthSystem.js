class HealthSystem {
    constructor(_maxHealth, _scene, _owner) { 
        this.maxHealth = _maxHealth;
        this.currentHealth = _maxHealth;
        this.scene = _scene;
        this.owner = _owner;
        
        this.invincible = false;
        this.invincibleTime = 500;

        this.knockbackForce = 400;
        this.knockbackTime = 200;
    }

    TakeDamage(_hitter){
        if(!this.invincible){

            console.log("HIT")

            this.tempHealth = this.currentHealth - 0.5;
            
            if(this.tempHealth > 0){
                this.InvulnerabilityTime()
                this.Knockback(_hitter);
                this.RestoreMovementAfterKnockbackTime();
                this.currentHealth = this.tempHealth;
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

    Knockback(_hitter){
        var enemyPosition = _hitter.body.position;

        var direction = {x: 0, y: 0};

        direction.x = this.owner.body.position.x - enemyPosition.x
        direction.y = this.owner.body.position.y - enemyPosition.y

        var magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);

        if (magnitude != 0) {
            direction.x = direction.x / magnitude; 
            direction.y = direction.y / magnitude;
        }

        this.owner.GetMovementSystem().CanMove(false);

        this.owner.body.velocity.x = direction.x * this.knockbackForce;
        this.owner.body.velocity.y = direction.y * this.knockbackForce;
    }

    HealthUp(){
        var tempHealth = this.currentHealth + 0.5;
        if(tempHealth <= this.maxHealth){
            this.currentHealth = tempHealth;
        }
        else if(tempHealth > this.maxHealth){
            this.currentHealth = this.maxHealth;
        }

        console.log(this.currentHealth);
    }

    InvulnerabilityTime(){
        
        this.invincible = true;
        this.scene.time.delayedCall(this.invincibleTime, () => {
                if(this.invincible){
                    this.invincible = false;
                }
        });
    }

    RestoreMovementAfterKnockbackTime(){
        this.scene.time.delayedCall(this.knockbackTime, () => {
                this.owner.GetMovementSystem().CanMove(true);    
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

    IsInvincible(){
        return this.invincible;
    }
}