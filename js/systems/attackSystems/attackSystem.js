class AttackSystem {

    constructor(_scene, _owner, _attackCooldown) {
class AttackSystem{
    
    constructor(_scene, _character, _attackCooldown){
        this.scene = _scene
        this.character = _character

        this.maxAttackCooldown = _attackCooldown
        this.currentAttackCooldown = this.maxAttackCooldown

        this.chargingAttack = false;
        this.chargeAttackTime = 1000;

        this.colliderObject = new HitboxPrefab(this.scene, 0, 0, 200);
        this.scene.physics.add.collider(this.colliderObject, this.enemies)
    }

    AddEnemies(_enemies) {
        this.enemies = _enemies
    }

    Attack(direction){

        //this.currentAttackCooldown >= this.maxAttackCooldown

        if(!this.chargingAttack){

            this.positionX = this.character.body.position.x
            this.positionY = this.character.body.position.y

            this.positionOffsetX = 40
            this.positionOffsetY = 40

            switch(direction){
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

            this.colliderObject.setNewPosition(this.positionX, this.positionY)

            this.currentAttackCooldown = 0
        }

        
    }

    ChargeAttack(direction, duration){

        this.chargingAttack = true

        if(duration > this.chargeAttackTime){
            this.colliderObject.setNewPosition(0,0)
        }
    }




    update(delta){
        
    }
}