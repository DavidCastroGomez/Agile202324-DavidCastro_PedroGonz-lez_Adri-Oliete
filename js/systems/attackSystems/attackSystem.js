class AttackSystem {

    constructor(_scene, _owner, _attackCooldown) {
        this.scene = _scene
        this.owner = _owner

        this.maxAttackCooldown = _attackCooldown
        this.currentAttackCooldown = this.maxAttackCooldown

        this.chargingAttack = false;
        this.chargeAttackTime = 1000;
        this.currentchargeAttackTime = 0;

        this.positionX = 0;
        this.positionY = 0;

        this.spinAttackTime = 500;
        this.currentSpinTime = 0;

        this.chargedPosition = new Phaser.Geom.Point([0], [0]);

        this.permormingChargedAttack = false;

        this.colliderObject = new HitboxPrefab(this.scene, 0, 0);
    }

    GetHitbox() {
        return this.colliderObject;
    }

    AddEnemies(_enemies) {
        this.enemies = _enemies
    }

    Attack(direction) {
        if (!this.chargingAttack && !this.permormingChargedAttack && this.currentAttackCooldown >= this.maxAttackCooldown) {

            if(this.scene.audioManager){
                this.scene.audioManager.playSFX('LTTP_Sword');
            }

            this.SetAttackPosition(direction, 1)

            this.colliderObject.setNewPosition(this.positionX, this.positionY)
            this.colliderObject.activeAttack(this.maxAttackCooldown, this.owner);

            this.currentAttackCooldown = 0;
        }
    }

    ChargeAttack() {
        this.chargingAttack = true
    }

    StopChargeAttack(direction) {

        if (this.chargingAttack && this.currentchargeAttackTime > this.chargeAttackTime) {

            this.SetAttackPosition(direction, -1)
            this.colliderObject.setNewPosition(this.positionX, this.positionY)
            this.colliderObject.activeAttack(this.spinAttackTime, this.owner);

            this.chargedPosition.setTo([this.positionX], [this.positionY])

            this.SetAttackPosition(direction, 0)

            this.permormingChargedAttack = true;

            this.owner.state = 'charged_attack';
            
            if(this.scene.audioManager){
                this.scene.audioManager.playSFX('LTTP_Sword_Spin');
            }
        }

        this.chargingAttack = false;
        this.currentchargeAttackTime = 0;
    }

    SetAttackPosition(direction, forward) {

        this.positionX = this.owner.body.position.x
        this.positionY = this.owner.body.position.y

        this.positionOffsetX = 20 * forward
        this.positionOffsetY = 20 * forward

        switch (direction) {
            case 'right':
                this.positionX += this.positionOffsetX;
                break
            case 'down':
                this.positionY += this.positionOffsetY;
                break
            case 'left':
                this.positionX -= this.positionOffsetX;
                break
            case 'up':
                this.positionY -= this.positionOffsetY;
                break
        }

    }

    updateAttackSystem(delta) {

        if (this.chargingAttack) {
            this.currentchargeAttackTime += delta;

            if (this.currentchargeAttackTime <= this.maxAttackCooldown) {
                this.owner.state = 'attack';
            }
            else {
                this.owner.state = 'charging_attack';
            }
        }
        else {
            this.currentchargeAttackTime = 0;
        }

        if (this.permormingChargedAttack) {

            if (this.currentSpinTime > 250) {
                this.chargedPosition = Phaser.Math.RotateAround(this.chargedPosition, this.positionX, this.positionY, 0.03 * delta);
                this.colliderObject.setNewPosition(this.chargedPosition.x, this.chargedPosition.y)
            }

            this.currentSpinTime += delta;

            if (this.currentSpinTime > this.spinAttackTime) {
                this.permormingChargedAttack = false;
                this.currentSpinTime = 0;
                this.currentAttackCooldown = 0;
            }
        }

        this.currentAttackCooldown += delta;
    }
}